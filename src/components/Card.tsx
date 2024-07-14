"use client";
import type {Card} from "@/types/types";
import Image from "next/image";
import React, {useState} from "react";
import "./Card.css";

type FlipCardProps = {
    card: Card
}

type RotateDirection =
    "top-left" | "top" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom" | "bottom-right";


const FlipCard: React.FC<FlipCardProps> = ({ card }) => {
   const [isFlipped, setIsFlipped] = useState(false);
   const [rotateDirection, setRotateDirection] = useState("");

   const handleSectionClick = (direction: RotateDirection) => {
       setRotateDirection(direction);
       setIsFlipped(prevState => !prevState);
   }

   return (
       <div className={`card-container  ${rotateDirection} ${isFlipped ? "flipped": ""}`}>
           <div className={"card"}>
               <div className={"card-front"}>
                   <Image src={card.image} alt={`Card ${card.id}`} layout="fill" objectFit="cover"/>
               </div>

               <div className={"card-back"}>
                   <p> {card.description}</p>
               </div>
           </div>

           <div className="trackers">
               <div className="mouse-tracker" onClick={() => handleSectionClick('top-left')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('top')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('top-right')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('left')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('center')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('right')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('bottom-left')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('bottom')}></div>
               <div className="mouse-tracker" onClick={() => handleSectionClick('bottom-right')}></div>
           </div>
       </div>
   )
};

export default FlipCard;
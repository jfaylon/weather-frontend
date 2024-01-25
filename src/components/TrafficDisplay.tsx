import React from "react";
import Image from "next/image";

interface TrafficDisplayProps {
  image: string | null;
  timestamp: string | null;
  location: string;
}

export const TrafficDisplay: React.FC<TrafficDisplayProps> = ({
  image,
  location,
  timestamp,
}) => {
  return (
    <div className="flex flex-col items-center">
      {image && (
        <div className="flex flex-col items-center">
          <p>{`Traffic as of`}</p>
          <p><span className="font-bold">Date:</span> {`${timestamp?.split("T")[0]}`}</p>
          <p><span className="font-bold">Time:</span> {`${timestamp?.split("T")[1]}`}</p>
          <Image src={image} alt={location} width={300} height={300} />
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

const PlacementProgramCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <Card className="w-full md:w-1/2 bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="flex flex-col p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://example.com/logo.png"
              alt="Placement Program"
              className="w-24 h-24 object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">Placement Guarantee Program</h2>
              <p className="text-sm text-gray-600">Full Stack Development - MERN Stack</p>
            </div>
          </div> 
          <CardTitle className="text-lg font-semibold mb-2">Key Features:</CardTitle>
          <div className="space-y-2">
            <div className="flex items-center">
              <Badge variant="outline" color="green" className="mr-2" />
              <span className="text-sm text-gray-700">CTC upto 25 LPA</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" color="green" className="mr-2" />
              <span className="text-sm text-gray-700">Direct access to our 6000+ partner companies</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" color="green" className="mr-2" />
              <span className="text-sm text-gray-700">200+ hrs of learning</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" color="red" className="mr-2" />
              <span className="text-sm text-gray-700">Daily LIVE Mentor Interaction</span>
            </div>
            <div className="flex items-center">
              <Badge variant="outline" color="green" className="mr-2" />
              <span className="text-sm text-gray-700">DSA + Interview Prep + Resume building</span>
            </div>
          </div>
          <Button
            // variant="solid"
            color="blue"
            size="lg"
            className="mt-6 self-center"
            onClick={() => window.location.href = '/details'}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlacementProgramCard;

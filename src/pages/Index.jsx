import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Paw, Heart, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Paw, Heart, Award } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1579213838058-0a0a0e5a3648?w=500&h=500&fit=crop" },
  { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=500&fit=crop" },
  { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop" },
  { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop" },
  { name: "Bulldog", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&h=500&fit=crop" },
  { name: "Poodle", image: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?w=500&h=500&fit=crop" },
  { name: "Beagle", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop" },
  { name: "Rottweiler", image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=500&h=500&fit=crop" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-4 text-blue-600">Paw-some Pals</h1>
          <p className="text-xl text-gray-600">Discover the wonderful world of dogs!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1000&h=800&fit=crop" 
              alt="Happy dog" 
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-600">Why Dogs are Amazing</h2>
            <p className="text-lg text-gray-700 mb-6">
              Dogs are more than just pets; they're loyal companions, devoted friends, and beloved family members. 
              Their unconditional love and unwavering support make them truly special in our lives.
            </p>
            <Button 
              size="lg" 
              className="w-fit"
              onClick={() => setLikes(likes + 1)}
            >
              <Heart className="mr-2 h-6 w-6" /> Show Some Love ({likes})
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-600">Characteristics of Dogs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <Heart className="h-6 w-6 text-red-500" />, text: "Loyal and affectionate" },
                  { icon: <Award className="h-6 w-6 text-yellow-500" />, text: "Highly trainable" },
                  { icon: <Paw className="h-6 w-6 text-green-500" />, text: "Come in various sizes and breeds" },
                  { icon: <Paw className="h-6 w-6 text-purple-500" />, text: "Have an excellent sense of smell" },
                  { icon: <Heart className="h-6 w-6 text-pink-500" />, text: "Can understand human emotions" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 text-lg">
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-600">Popular Dog Breeds</CardTitle>
              <CardDescription>Swipe to see some of the most beloved dog breeds worldwide</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {dogBreeds.map((breed, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-center">
                              <img src={breed.image} alt={breed.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                              <h3 className="font-semibold">{breed.name}</h3>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

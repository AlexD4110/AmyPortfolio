import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Award, Book, Users, Briefcase, Lightbulb, X } from "lucide-react"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

interface CVHighlight {
  title: string
  organization: string
  date: string
  description: string
  icon: React.ReactNode
  image: string
  imageDescription: string
}

const cvHighlights: CVHighlight[] = [
  {
    title: "President/Producer at ListenPRN",
    organization: "ListenPRN",
    date: "September 2024 – Present",
    description: "Spearheaded the creation of a student-led pharmacy podcast, leading a team of 5 students and 1 faculty advisor.",
    icon: <Briefcase className="h-6 w-6" />,
    image: "/3.svg",
    imageDescription: "Our team recording the inaugural episode of ListenPRN, featuring discussions on latest advancements in pharmacy practice. This initiative has reached over 1,000 listeners, providing valuable insights to students and professionals alike.",
  },
  {
    title: "Inclusion Chair at Diversity Committee",
    organization: "Diversity Committee",
    date: "September 2023 – Present",
    description: "Revived the School of Pharmacy Diversity Week after a five-year hiatus, organizing multicultural events.",
    icon: <Users className="h-6 w-6" />,
    image: "/amy_angela.jpg",
    imageDescription: "A snapshot from our Diversity Week celebration, showcasing a panel discussion on cultural competence in healthcare. This event attracted over 200 participants and led to the implementation of new diversity initiatives curriculum.",
  },
  {
    title: "VIP Case Competition Member",
    organization: "Industry Pharmacists Organization (IPhO)",
    date: "September 2023 – Present",
    description: "Participated in regulatory affairs and medical teams for mock-up drug cases.",
    icon: <Lightbulb className="h-6 w-6" />,
    image: "/logo-ipho.svg",
    imageDescription: "Our team presenting our innovative approach to a mock biologic drug for metastatic castrate-resistant prostate cancer. This project enhanced understanding of regulatory processes and market dynamics in the pharmaceutical industry.",
  },
  {
    title: "Pharmacy Student Government Representative",
    organization: "Lambda Kappa Sigma (LKS)",
    date: "September 2023 – Present",
    description: "Selected from 80 sisters to serve as liaison between Pharmacy Student Government and LKS.",
    icon: <Award className="h-6 w-6" />,
    image: "/lks.png",
    imageDescription: "Representing LKS at the annual Pharmacy Student Government conference, where we successfully advocated for increased mental health resources for pharmacy students. This initiative resulted in a 30% increase in counseling services availability.",
  },
  {
    title: "President",
    organization: "No Friend Left nALOxoNE (NFLN)",
    date: "September 2022 – Present",
    description: "Organized Narcan training sessions, engaging 40 students per session to promote opioid overdose interventions.",
    icon: <Book className="h-6 w-6" />,
    image: "/NFLN.jpeg",
    imageDescription: "Conducting a Narcan training session for fellow students. Through our efforts, we've trained over 200 individuals in opioid overdose prevention, potentially saving numerous lives in the community.",
  },
  {
    title: "Pharmacy Team Student Coordinator",
    organization: "South Park Clinic Board",
    date: "September 2022 – Present",
    description: "Analyzed medication utilization reports to reduce costs by 10% through strategic purchasing and inventory management.",
    icon: <Briefcase className="h-6 w-6" />,
    image: "/SouthPark.jpeg",
    imageDescription: "Presenting our cost-saving strategies to the South Park Clinic Board. Our team's efforts resulted in a 10% reduction in medication costs, allowing the clinic to expand its services to underserved populations.",
  },
]

export function LeadershipShowcase() {
  const [selectedHighlight, setSelectedHighlight] = useState<CVHighlight | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <header className="bg-neutral-900 text-neutral-50 py-12 dark:bg-neutral-50 dark:text-neutral-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Leadership Experience</h1>
          <p className="text-xl">A journey of leadership, innovation, and impact in pharmacy</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <ScrollArea className="h-[calc(100vh-250px)] pr-4">
      <div className="space-y-4">
        {cvHighlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              className="w-full justify-between text-left hover:bg-neutral-900 hover:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
              onClick={() => setSelectedHighlight(highlight)}
            >
              <span className="flex items-center">
                {highlight.icon}
                <span className="ml-2">{highlight.title}</span>
              </span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </ScrollArea>

    <div>
      {selectedHighlight ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden">
            <div className="p-4"> {/* Add padding around the image */}
              <div 
                className="relative h-64 w-full cursor-pointer" 
                onClick={openModal}
                style={{
                  backgroundImage: `url(${selectedHighlight.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">Click to view details</p>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{selectedHighlight.title}</CardTitle>
              <CardDescription>{selectedHighlight.organization}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-500 mb-4 dark:text-neutral-400">{selectedHighlight.date}</p>
              <p>{selectedHighlight.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div className="h-full flex items-center justify-center text-neutral-500 dark:text-neutral-400">
          Select a highlight to view details
        </div>
      )}
    </div>
  </div>
</main>


      <AnimatePresence>
        {isModalOpen && selectedHighlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg overflow-hidden max-w-2xl w-full dark:bg-neutral-950"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="relative h-64 w-full"
                style={{
                  backgroundImage: `url(${selectedHighlight.image})`,
                  backgroundSize: "contain", // Ensures the entire image is visible
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents repeating the image
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedHighlight.title}</h3>
                <p className="text-neutral-500 mb-4 dark:text-neutral-400">{selectedHighlight.organization}</p>
                <p className="text-sm mb-4">{selectedHighlight.imageDescription}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LeadershipShowcase;
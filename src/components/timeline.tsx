import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

interface Experience {
  company: string
  location: string
  position: string
  date: string
  supervisor: string
  responsibilities: string[]
  images: string[]
}

const experiences: Experience[] = [
  {
    company: "Takeda Pharmaceuticals",
    location: "Boston, MA",
    position: "Intern, Global Medical/Marketed Products Development",
    date: "May 2024 – August",
    supervisor: "Vivek Deore, MD, MS",
    responsibilities: [
      "Conducted comprehensive analyses of FDA Postmarketing Requirement and Postmarket Commitment databases, narrowing down 2,632 studies to 227 pregnancy-related studies, providing strategic insights that supported MOTEGRITY®'s regulatory submissions",
      "Developed strategies to address challenges in post-marketing pregnancy safety studies, aiding the creation of a strategic response FDA and enhancing MOTEGRITY®'s market positioning",
      "Reviewed MEDIVA templates to ensure alignment with EMA guidance, reducing potential audit findings by 25% and improving documentation accuracy compliance",
      "Collaborated with the Center for Post Authorization Safety Studies and Clinical Science Teams, fostering cross-functional communication that reduced project turnaround times by 10%",
      "Compiled a detailed list of all prescription and OTC IBS-C/CIC drugs—including manufacturer, drug class, indication, regulatory status—enhancing the team's understanding competitive landscape"
    ],
    images: ["/amy.png", "/dinner.webp", "/viewhigh.webp", "/boss.webp"]
  },
  {
    company: "The Medicine Shoppe",
    location: "Vernon, CT",
    position: "Pharmacy Intern",
    date: "August 2023 – May 2024",
    supervisor: "Heraquido (Andrew) DaSilva, PharmD, RPh",
    responsibilities: [
      "Assisted in managing the financial aspects of pharmacy operations, including contributing to oversight a $500,000 annual budget, helping reduce inventory costs by 15%, and streamlining procurement processes save approximately $50,000 annually",
      "Engaged in community outreach and customer service, helping over 1,200 patients contributing to a 10% increase patient retention through personalized care proactive follow-up"
    ],
    images: ["/selfie.webp"]
  },
  {
    company: "Hartford Hospital",
    location: "Hartford, CT",
    position: "Intern, Health Systems Pharmacy",
    date: "April 2023 – July 2024",
    supervisor: "Khalilah Burgin, PharmD, RPh",
    responsibilities: [
      "Proficiently handling computer activities to maintain patient profiles, enter charges and credits, generate unit dose fill lists. Ensuring precise efficient filling of carts in adherence computerized lists",
      "Conducting patient care unit inspections to uphold pharmaceutical quality standards",
      "Undertaking technical pharmaceutical functions related to drug purchasing, receiving, and distribution, demonstrating a holistic understanding of the supply chain",
      "Prepackaging tablets, capsules, and other dosage forms for in-patient dispensing"
    ],
    images: ["/HHC.svg"]
  },
  {
    company: "CVS Pharmacy",
    location: "Stafford Springs, CT",
    position: "Technician, Community Pharmacy",
    date: "September 2020 – 2021",
    supervisor: "Gifty Oteng, PharmD, RPh",
    responsibilities: [
      "Managed inventory by regularly rotating stock and meticulously inspecting for expired medications, adhering to stringent quality compliance standards",
      "Proficiently conducted technical procedures necessary for the dispensing of medications to patients, aligning with pharmaceutical operational standards",
      "Inspected drug storage sites, monitored supply expiration dates and ensured proper levels",
      "Maintained a commitment to safety and sanitation by cleaning equipment, work areas, sterilizing glassware"
    ],
    images: ["/tree.webp"]
  }
]

function ImageCarousel({ images, company }: { images: string[], company: string }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`relative w-full ${
        company === "Hartford Hospital" ? "h-[30rem]" : "h-[40rem]"
      } rounded-lg overflow-hidden`}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${company} experience`}
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: company === "Hartford Hospital" ? "contain" : "cover",
            objectPosition: company === "Hartford Hospital" ? "center" : "center 18%",
            transform: company === "Hartford Hospital" ? "scale(1.5)" : "scale(1)" // Slightly increase the scale
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-neutral-950/80 dark:hover:bg-neutral-950"
            onClick={prevImage}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-neutral-950/80 dark:hover:bg-neutral-950"
            onClick={nextImage}
          >
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </>
      )}
    </div>
  );
}


export function Timeline() {
  return (
    <div className="container mx-auto p-4 bg-white dark:bg-neutral-950">
      <h2 className="text-3xl font-semibold text-center mb-10">Professional Experience Timeline</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-primary-foreground h-full rounded-full" />
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative grid gap-8 mb-16 md:grid-cols-[1fr,auto,1fr]">
            <div className={`${index % 2 === 0 ? "block" : "order-3"} space-y-4`}>
              {index % 2 === 0 && <ImageCarousel images={exp.images} company={exp.company} />}
            </div>

            <div className="relative flex items-center justify-center">
              <motion.div
                className="w-8 h-8 rounded-full bg-neutral-900 border-4 border-white shadow-lg dark:bg-neutral-50 dark:border-neutral-950"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>

            <div className={`${index % 2 === 0 ? "order-3" : "block"} space-y-4`}>
              {index % 2 === 1 && <ImageCarousel images={exp.images} company={exp.company} />}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-neutral-100 dark:bg-neutral-800">
                  <CardTitle className="text-xl font-semibold">{exp.company}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{exp.location}</Badge>
                    <Badge variant="outline">{exp.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-2">
                    <p className="font-medium text-lg">{exp.position}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Supervisor: {exp.supervisor}</p>
                  </div>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-neutral-500 dark:text-neutral-400">
                        <span className="text-neutral-950 dark:text-neutral-50">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline;
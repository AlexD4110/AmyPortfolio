import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
  company: string;
  location: string;
  position: string;
  date: string;
  supervisor: string;
  responsibilities: string[];
  image: string;
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
    image: "/placeholder.svg?height=200&width=200"
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
    image: "/placeholder.svg?height=200&width=200"
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
    image: "/placeholder.svg?height=200&width=200"
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
    image: "/placeholder.svg?height=200&width=200"
  }
];

const TimelineComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex w-full mb-16 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`relative w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-left'}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{exp.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-500 mb-2 dark:text-neutral-400">
                    {exp.location}
                  </p>
                  <p className="font-medium mb-2">{exp.position}</p>
                  <p className="text-sm text-neutral-500 mb-2 dark:text-neutral-400">
                    {exp.date}
                  </p>
                  <p className="text-sm text-neutral-500 mb-4 dark:text-neutral-400">
                    Supervisor: {exp.supervisor}
                  </p>
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-900 rounded-full dark:bg-neutral-50"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
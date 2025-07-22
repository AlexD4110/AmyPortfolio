import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, BadgeCheck, Heart } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Define the types for PageCard props
interface PageCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>; // Specify a general type for icon components
  href: string;
}

const pageLinks = [
  {
    title: 'Education',
    description: 'View my academic background',
    icon: GraduationCap,
    href: '/education',
  },
  {
    title: 'Experience',
    description: 'See my professional experience',
    icon: Briefcase,
    href: '/experience',
  },
  {
    title: 'Certifications',
    description: 'My certifications and licenses',
    icon: BadgeCheck,
    href: '/certifications',
  },
  {
    title: 'Volunteer Work',
    description: 'My volunteer activities',
    icon: Heart,
    href: '/volunteer',
  },
];

// Update PageCard component with explicit props types
const PageCard = ({ title, description, icon: Icon, href }: PageCardProps) => (
  <Card className="group hover:shadow-lg transition-all duration-300" style={{ fontFamily: 'Helvetica Neue Light' }}>
    <CardHeader>
      <Icon className="h-8 w-8 text-neutral-900 mb-2 dark:text-neutral-50" />
      <CardTitle style={{ fontFamily: 'Helvetica Neue Light' }}>{title}</CardTitle>
      <CardDescription style={{ fontFamily: 'Helvetica Neue Light' }}>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Link to={href}>
        <Button
          variant="ghost"
          className="group-hover:text-neutral-900 transition-colors duration-300 dark:group-hover:text-neutral-50"
          style={{ fontFamily: 'Helvetica Neue Light' }}
        >
          Learn More{' '}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

const LandingPageComponent = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950" style={{ fontFamily: 'Helvetica Neue Light' }}>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-2xl font-normal tracking-tight lg:text-5xl mb-4">
            Hi, I'm{' '}
            <span className="text-neutral-900 dark:text-neutral-50 font-normal">
              Amy Nguyen
            </span>
          </h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8 dark:text-neutral-400">
            Aspiring pharmacist dedicated to patient care and advancing pharmaceutical practice
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </section>

        {/* About Me Section */}
        <section className="mb-16">
          <div className="bg-white text-neutral-950 rounded-lg shadow-lg overflow-hidden dark:bg-neutral-950 dark:text-neutral-50 md:flex">
            <div className="md:w-1/4 h-full">
              <img
                className="w-full h-full object-cover object-center"
                src="/amy.png" // Correct path for public folder
                alt="Amy Nguyen"
              />
            </div>
            <div className="p-8 md:w-3/4">
              <h2 className="text-3xl font-normal mb-4">About Me</h2>
              <p className="text-lg mb-4">
                As a PharmD student at the University of Connecticut, my core drive is to significantly impact patient care through advancements in pharmacy. I'm especially drawn to pharmaceutical regulatory affairs, recognizing its vital role in bringing life-changing therapies to a broad patient population. The integration of Artificial Intelligence (AI) into drug development and the constant evolution of agency guidelines, such as those from the FDA on AI applications, are areas I follow with great interest, seeing their potential to dramatically improve efficiency and access. I thrive in collaborative environments, always eager to apply my growing knowledge to real-world challenges and contribute to the future of healthcare. </p>
              <p className="text-lg mb-6">
              When I step away from my studies, I embrace a variety of interests that keep me curious and engaged. You might find me honing my skills at billiards, discovering unique flavors at a new restaurant, enjoying the quiet contemplation of a library, or experiencing the delight of a lucky find while thrifting and opening blind boxes.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">More About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Page Links Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageLinks.map((link, index) => (
              <PageCard key={index} {...link} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPageComponent;


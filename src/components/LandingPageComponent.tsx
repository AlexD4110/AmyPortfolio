'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, BadgeCheck, Heart } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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

const PageCard = ({ title, description, icon: Icon, href }) => (
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

const LandingPageComponent: React.FC = () => {
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
                I am a pharmacy student at the University of Connecticut,
                pursuing a PharmD with a passion for patient care and
                pharmaceutical innovation. My experiences range from community
                pharmacy internships to global pharmaceutical development.
              </p>
              <p className="text-lg mb-6">
                I am committed to enhancing healthcare through dedication,
                continuous learning, and applying my skills in real-world
                settings. I thrive in collaborative environments and am eager
                to contribute to the future of pharmacy.
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
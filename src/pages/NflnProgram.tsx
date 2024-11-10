import React from 'react';
import CategoryPageTemplate from '../components/CategoryPageTemplate';

const NflnProgram: React.FC = () => {
  return (
    <CategoryPageTemplate
      title="No Friend Left nALOxoNE (NFLN) Program"
      date="November 9, 2024"
      author="Amy Nguyen"
      category="Community Health"
      imageSrc="https://example.com/path/to/naloxone-program-image.jpg"
    >
      <p>
        The No Friend Left nALOxoNE (NFLN) program is dedicated to raising awareness about
        opioid overdose and providing essential tools and training to prevent it. Our mission
        is to educate communities on the importance of naloxone, an opioid overdose reversal
        medication, and to ensure that friends and family members are equipped to help in the
        event of an overdose emergency.
      </p>

      <p>
        Learn more about our initiatives on our Instagram page:
        <a
          href="https://www.instagram.com/nfln_uconn/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-1"
        >
          NFLN UConn Instagram
        </a>
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
      <p>
        Our mission is to make naloxone accessible and to ensure that no friend is left behind
        in the fight against opioid overdoses. By collaborating with healthcare providers, local
        authorities, and community members, NFLN strives to build a safer, healthier environment
        for everyone.
      </p>
    </CategoryPageTemplate>
  );
};

export default NflnProgram;

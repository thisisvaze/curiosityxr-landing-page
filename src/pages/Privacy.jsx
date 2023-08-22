import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Privacy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}


      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          {/* <PageIllustration /> */}
        </div>

        {/*  Page sections */}

        <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
            
            <h1 className="h2 mb-4">Privacy Policy</h1>
            <p className="text-xl  text-gray-400">At CuriosityXR, we understand the importance of privacy and the protection of personal information. This privacy policy outlines how we collect, use, disclose, and protect your personal information when you use our application and services.</p>

          </div>
          <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="text-l pb-5 text-gray-600">Last updated: Mar 4, 2023</p>
            <p className="h4  mb-4">What information do we collect?</p>
            <p className="text-xl text-gray-400">When you use our application, we may collect certain personal information such as your name, email address, and location. We may also collect information related to your device, such as your IP address, browser type, and operating system.

Additionally, we collect data related to your usage of our application and services, such as the 3D models you interact with and the questions you ask.</p>
          </div>
          <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="h4  mb-4">How do we use your information?</p>
            <p className="text-xl text-gray-400">We use your personal information to provide our services to you and to improve our application. Specifically, we use your information to:

Provide access to 3D models and the ability to ask questions.
Respond to your inquiries and customer service requests.
Improve our application and services, such as by analyzing usage data to identify trends and areas for improvement.
Personalize your experience, such as by recommending content based on your previous usage. We may also use your information for marketing purposes, such as to send promotional emails or other communications about our application and services.</p>
          </div>
          <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="h4  mb-4">How do we disclose your information?</p>
            <p className="text-xl text-gray-400">We may disclose your personal information to third-party service providers who assist us in providing our services. For example, we may use a third-party hosting provider to host our application and store user data.

We may also disclose your information in response to a subpoena, court order, or other legal request, or to comply with applicable laws or regulations. Additionally, we may disclose your information if we believe it is necessary to investigate, prevent, or take action regarding illegal activities, fraud, or violations of our terms of service.</p>
          </div>
          <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="h4  mb-4">How we protect your information?</p>
            <p className="text-xl text-gray-400">We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. We use industry-standard security measures, such as encryption and secure storage, to protect your data.

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
          </div>
          <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="h4  mb-4">How can you update/delete my informtion?</p>
            <p className="text-xl text-gray-400">
              
                        Yes, you can update or correct your information depending on your relationship with Curiosity XR. If you are a personnel of the company, you may refer to the internal employment policies for instructions on how to update or correct your information.
              As a customer, you have the right to request the restriction of certain uses and disclosures of your personally identifiable information. You may contact Curiosity XR to update or correct your personally identifiable information, change your communication preferences, or delete your personally identifiable information on their system by cancelling your account. However, such changes will not affect other information that the company maintains or has provided to third parties in accordance with their privacy policy.
              To protect your privacy and security, Curiosity XR may take reasonable steps, such as requesting a unique password, to verify your identity before granting you profile access or making corrections. It is your responsibility to maintain the secrecy of your unique password and account information at all times.
              Please note that it may not be technically possible to remove each and every record of the information you have provided to Curiosity XR from their system. Backing up their systems to protect information from inadvertent loss means that a copy of your information may exist in a non-erasable form that may be difficult or impossible for the company to locate. However, Curiosity XR will promptly update, correct, change, or delete personal information stored in databases they actively use, and other readily searchable media, as appropriate and to the extent reasonably and technically practicable.
          </p> <p className="text-xl mt-5 text-gray-400">
              As an end user, if you wish to update, delete, or receive any information that Curiosity XR has about you, you may contact them at hello@curiosityxr.com.</p>   
          </div>
          <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="h4  mb-4">Children's privacy</p>
            <p className="text-xl text-gray-400">Our application is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13.</p>
          </div>
         
      
          <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="h4  mb-4">Changes to the privacy policy</p>
            <p className="text-xl text-gray-400">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website or within our application. You are advised to review this privacy policy periodically for any changes.</p>
          </div>
          {/* <div className="text-left max-w-3xl mx-auto  pb-12 md:pb-16">
            <p className="h4  mb-4">Contact Us</p>
            <p className="text-xl text-gray-400">If you have any questions about this privacy policy, please contact us on .</p>
          </div> */}
       </div>
      </div>
    </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Privacy;
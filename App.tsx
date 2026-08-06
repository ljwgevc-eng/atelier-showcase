/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductCatalog from './components/ProductCatalog';
import ProcessSection from './components/ProcessSection';
import SupportSection from './components/SupportSection';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>(() => {
    try {
      const hash = window.location.hash.replace('#', '').trim();
      if (['about', 'products', 'process', 'support', 'inquiry'].includes(hash)) {
        return hash;
      }
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get('tab');
      if (tabParam && ['about', 'products', 'process', 'support', 'inquiry'].includes(tabParam)) {
        return tabParam;
      }
    } catch (e) {
      console.warn('URL parsing error:', e);
    }
    return 'home';
  });
  
  // States for pre-populated inquiries from portfolio styles
  const [selectedStyleTitle, setSelectedStyleTitle] = useState<string>('');
  const [selectedStyleCategory, setSelectedStyleCategory] = useState<string>('');
  const [selectedStyleDimensions, setSelectedStyleDimensions] = useState<string>('');

  // Triggered when clicking "이 제품 사양으로 문의하기" inside Product Catalog
  const handleQuoteWithProduct = (details: string, category: string, dimensions?: string) => {
    setSelectedStyleTitle(details);
    setSelectedStyleCategory(category);
    setSelectedStyleDimensions(dimensions || '');
    setCurrentTab('inquiry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct estimate button handler
  const handleOpenQuickQuote = () => {
    setSelectedStyleTitle('');
    setSelectedStyleCategory('');
    setCurrentTab('inquiry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans flex flex-col justify-between selection:bg-gold-500 selection:text-slate-950">
      
      {/* Sticky Top Luxury Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          // Clean pre-populated states if they navigate manually
          if (tab !== 'inquiry') {
            setSelectedStyleTitle('');
            setSelectedStyleCategory('');
          }
        }}
        onOpenQuote={handleOpenQuickQuote}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {(currentTab === 'home' || !['about', 'products', 'process', 'support', 'inquiry'].includes(currentTab)) && (
          <Hero
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'about' && <AboutUs />}

        {currentTab === 'products' && (
          <ProductCatalog
            onQuoteWithProduct={handleQuoteWithProduct}
          />
        )}

        {currentTab === 'process' && <ProcessSection />}

        {currentTab === 'support' && <SupportSection />}

        {currentTab === 'inquiry' && (
          <InquiryForm
            initialStyleTitle={selectedStyleTitle}
            initialCategory={selectedStyleCategory}
            initialDimensions={selectedStyleDimensions}
          />
        )}
      </main>

      {/* Detailed Premium Brand Footer */}
      <Footer
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}


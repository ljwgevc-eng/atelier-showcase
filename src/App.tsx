/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PortfolioList from './components/PortfolioList';
import ProductCatalog from './components/ProductCatalog';
import ProcessSection from './components/ProcessSection';
import SupportSection from './components/SupportSection';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import { PortfolioItem } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  
  // States for pre-populated inquiries from portfolio styles
  const [selectedStyleTitle, setSelectedStyleTitle] = useState<string>('');
  const [selectedStyleCategory, setSelectedStyleCategory] = useState<string>('');

  // Floating preview item state (bridges hero home clicks with portfolio detail modal)
  const [selectedPortfolioPreItem, setSelectedPortfolioPreItem] = useState<PortfolioItem | null>(null);

  // Triggered when clicking "이 시공 스타일로 견적 문의" inside Portfolio List
  const handleQuoteWithStyle = (portfolioTitle: string, category: string) => {
    setSelectedStyleTitle(portfolioTitle);
    setSelectedStyleCategory(category);
    setCurrentTab('inquiry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Triggered when clicking "이 견적으로 제작 문의하기" inside Product Catalog
  const handleQuoteWithProduct = (details: string, category: string) => {
    setSelectedStyleTitle(details);
    setSelectedStyleCategory(category);
    setCurrentTab('inquiry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Triggered when clicking portfolio cards in Home/Hero
  const handleSelectPortfolioFromHome = (item: PortfolioItem) => {
    setSelectedPortfolioPreItem(item);
    setCurrentTab('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset pre-item once portfolio list modal closes
  const handleClosePreItem = () => {
    setSelectedPortfolioPreItem(null);
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
        {currentTab === 'home' && (
          <Hero
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectPortfolio={handleSelectPortfolioFromHome}
          />
        )}

        {currentTab === 'about' && <AboutUs />}

        {currentTab === 'portfolio' && (
          <PortfolioList
            onQuoteWithStyle={handleQuoteWithStyle}
            selectedPreItem={selectedPortfolioPreItem}
            onClosePreItem={handleClosePreItem}
          />
        )}

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


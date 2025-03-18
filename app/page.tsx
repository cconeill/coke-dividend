"use client"

import * as React from "react"

import { useEffect, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  const [sharePrice, setSharePrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchSharePrice = async () => {
      try {
          const response = await fetch('/api/share-price');
          const price = await response.json();
          setSharePrice(price);
      } catch (error) {
          console.error('Error fetching share price:', error);
      }
  };

    fetchSharePrice();
  }, []); // Empty dependency array means this runs once on mount

  const [inputValue, setInputValue] = useState<number>(1)
  // 0.51 is the quarterly dividend per share
  const yearlyDividend = 0.51 * 4

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(event.target.value)
    setInputValue(isNaN(value) ? 0 : value)
  }

  const handleSliderChange = (value: number[]) => {
    setInputValue(value[0])
  }

  // inputValue is the number of Diet Cokes per day, we need to multiply by 365 to get the number of Diet Cokes per year
  // we need to multiply by $1.66 as the cost per Diet Coke.
  const numberOfShares = Math.floor(inputValue * 365 * 1.66 / yearlyDividend)
  const formattedNumberOfShares = numberOfShares.toLocaleString();

  const priceOfShares = sharePrice !== null ? Math.floor(numberOfShares * sharePrice) : 0
  const formattedPriceOfShares = priceOfShares.toLocaleString();

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
    {/* <main 
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{
          backgroundImage: 'url(/background.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ fontFamily: 'Libre Baskerville, serif' }}>
      <div className="flex items-center rounded-lg space-x-4">
      <h1 className="text-7xl font-bold mb-4" style={{ fontFamily: 'Imperial Script, serif' }}>Diet</h1>
      <h1 className="text-6xl font-bold mb-4" style={{ color: "#F40000" }}>Coke</h1>
      <h1 className="text-6xl font-bold mb-4">Dividend Calculator</h1>
      </div>
      
      <p className="text-xl mb-12">Calculate how many shares of Coca-Cola you need to own to pay for your daily Diet Coke</p>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
        <div className="bg-muted p-8 rounded-lg" style={{ boxShadow: "0 4px 30px rgba(255, 255, 255, 0.5)", backgroundColor: "rgba(200, 200, 200, 0.8)" }}>
          <h2 className="text-2xl font-semibold mb-4">How many Diet Cokes do you drink per day?</h2>
          <Input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            className="text-lg"
            placeholder="Enter diet coke amount"
            aria-label="Diet coke amount input"
          />
          <br />
          <Slider
            min={0}
            max={20}
            step={1}
            value={[inputValue]}
            onValueChange={handleSliderChange}
            aria-label="Diet Coke amount slider"
          />
        </div>
        </div>
        <div className="space-y-6">
        <div className="bg-muted p-8 rounded-lg" style={{ boxShadow: "0 4px 30px rgba(255, 255, 255, 0.5)", backgroundColor: "rgba(200, 200, 200, 0.8)" }}>
          <p className="text-lg mb-4">To cover your {inputValue} Diet Coke per day habit, you will need to buy:</p>
          <p className="text-4xl font-bold text-primary mb-4" style={{ color: "#F40000" }}>{formattedNumberOfShares} shares</p>
          <p className="text-muted-foreground">
            This calculation is based on a quarterly dividend of ${yearlyDividend} per share.
          </p>
        </div>
        <div className="bg-muted p-8 rounded-lg" style={{ boxShadow: "0 4px 30px rgba(255, 255, 255, 0.5)", backgroundColor: "rgba(200, 200, 200, 0.8)" }}>
          <p className="text-lg mb-4">At Coca-Cola's current price of ${sharePrice} per share, this will cost you:</p>
          <p className="text-4xl font-bold text-primary mb-4" style={{ color: "#F40000" }}>${formattedPriceOfShares} dollars</p>
        </div>
        </div>
        </div>
        </div>
      <footer className="mt-20 text-center">
          Source code <a href="https://github.com/cconeill/coke-dividend/" target="_blank" rel="noopener noreferrer" className="underline">cconeill/coke-dividend</a> 👨‍💻
          <p>Made with ❤️ in San Francisco</p>
      </footer>
    </main> */}
    <main 
        className="bg-cover bg-center bg-no-repeat min-h-screen overflow-x-hidden p-4 md:p-24"
        style={{
        backgroundImage: 'url(/background.webp)',
      }}
    >
<div className="w-full max-w-md sm:max-w-lg md:max-w-4xl mx-auto">
  <div style={{ fontFamily: 'Libre Baskerville, serif' }}>
    <div className="flex flex-wrap items-center justify-center space-x-4">
      <h1
        className="whitespace-nowrap text-4xl md:text-7xl font-bold"
        style={{ fontFamily: 'Imperial Script, serif' }}
      >
        Diet
      </h1>
      <h1
        className="whitespace-nowrap text-4xl md:text-6xl font-bold"
        style={{ color: "#F40000" }}
      >
        Coke
      </h1>
      <h1
        className="whitespace-nowrap text-4xl md:text-6xl font-bold"
      >
        Dividend Calculator
      </h1>
    </div>
    
    <p className="text-lg md:text-xl mb-12 text-center">
      Calculate how many shares of Coca-Cola you need to own to pay for your daily Diet Coke
    </p>

    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div 
          className="bg-muted p-6 md:p-8 rounded-lg" 
          style={{
            boxShadow: "0 4px 30px rgba(255, 255, 255, 0.5)", 
            backgroundColor: "rgba(200, 200, 200, 0.8)"
          }}
        >
          <p className="text-base md:text-lg">
            How many Diet Cokes do you drink per day?
          </p>
          <br />
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {inputValue} Diet Cokes
          </h2>
          <br />
          <Slider
            min={0}
            max={20}
            step={1}
            value={[inputValue]}
            onValueChange={handleSliderChange}
            aria-label="Diet Coke amount slider"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div 
          className="bg-muted p-6 md:p-8 rounded-lg" 
          style={{
            boxShadow: "0 4px 30px rgba(255, 255, 255, 0.5)", 
            backgroundColor: "rgba(200, 200, 200, 0.8)"
          }}
        >
          <p className="text-base md:text-lg mb-4">
            To cover your {inputValue} Diet Coke per day habit, you will need to buy:
          </p>
          <p 
            className="text-3xl md:text-4xl font-bold text-primary mb-4" 
            style={{ color: "#F40000" }}
          >
            {formattedNumberOfShares} shares
          </p>
          <p className="text-muted-foreground">
            This calculation is based on a yearly dividend of ${yearlyDividend} per share.
          </p>
        </div>
        <div 
          className="bg-muted p-6 md:p-8 rounded-lg" 
          style={{
            boxShadow: "0 4px 30px rgba(255, 255, 255, 0.5)", 
            backgroundColor: "rgba(200, 200, 200, 0.8)"
          }}
        >
          <p className="text-base md:text-lg mb-4">
            At Coca-Cola's current price of ${sharePrice} per share, this will cost you:
          </p>
          <p 
            className="text-3xl md:text-4xl font-bold text-primary mb-4" 
            style={{ color: "#F40000" }}
          >
            ${formattedPriceOfShares} dollars
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <footer className="mt-20 text-center">
    Source code <a href="https://github.com/cconeill/coke-dividend/" target="_blank" rel="noopener noreferrer" className="underline">cconeill/coke-dividend</a> 👨‍💻
    <p>Made with ❤️ in San Francisco</p>
  </footer>
  </div>
</main>

    </>
  )
}

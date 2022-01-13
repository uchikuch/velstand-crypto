import React from "react";
import BalanceCard from "./BalanceCard";
import Greeting from "../Greeting";
import VisaCredit from "../Overview/VisaCredit";

export default function Overview() {
  return (
    <div className="bg-dashboard pb-24">
      <div className="container py-8 lg:pl-20 lg:pr-12">
        <div>
          <Greeting sub="Manage your payouts," main="Balance 💰" />
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* left */}
          <div className="flex flex-1 flex-col mt-8">
            {/* Small Cards Top Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <BalanceCard
                  title="Total Balance"
                  amount="$128,983.00"
                  percent="+37.8%"
                />
              </div>
              <div className="flex-grow">
                <BalanceCard
                  title="Velstand Token"
                  amount="$23,938.22"
                  percent="+2.3%"
                />
              </div>
            </div>
            {/* Small Cards Bottom Row */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <div className="flex-grow">
                <BalanceCard
                  title="V Stable Coin"
                  amount="$98,123.01"
                  percent="-0.8%"
                />
              </div>
              <div className="flex-grow">
                <BalanceCard
                  title="Earning this week"
                  amount="$2,134.93"
                  percent="+1.23%"
                />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-3 mt-10">
            <h3 className="text-lg font-semiboldz">Your Debit Card 💰</h3>
            <div className="flex-grow mt-2">
              <VisaCredit
                title="Velstand Token"
                amount="$398.25"
                percent="+2.2%"
                previous="$124"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

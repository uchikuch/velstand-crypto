import React from "react";
import OverviewCard from "./OverviewCard";
import Greeting from "../Greeting";
import VisaCredit from "./VisaCredit";
import YourAssets from "./YourAssets";

export default function Overview() {
  return (
    <div className="bg-dashboard pb-24">
      <div className="container py-8 pl-20 pr-12">
        <div>
          <Greeting sub="Hi Nicole," main="Welcome back 👋" />
        </div>
        <div className="flex gap-6">
          {/* left */}
          <div className="flex flex-1 flex-col mt-8">
            {/* Small Cards Top Row */}
            <div className="flex gap-3">
              <div className="flex-grow">
                <OverviewCard
                  title="Your earning this month"
                  amount="$1,632"
                  percent="+2.5%"
                  previous="$1.540"
                />
              </div>
              <div className="flex-grow">
                <OverviewCard
                  title="Current Balance"
                  amount="$4,398.20"
                  percent="+11.92%"
                  previous="$3,982.23"
                />
              </div>
            </div>
            {/* Small Cards Bottom Row */}
            <div className="flex gap-3 mt-6">
              <div className="flex-grow">
                <OverviewCard
                  title="Velstand Token"
                  amount="$398.25"
                  percent="+2.2%"
                  previous="$124"
                />
              </div>
              <div className="flex-grow">
                <OverviewCard
                  title="V Stable Coin"
                  amount="$567"
                  percent="-1.5%"
                  previous="$650.00"
                />
              </div>
            </div>
            {/* Your Debit Card */}
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
          {/* Right */}
          <div className="flex flex-1 flex-col mt-8">
            <YourAssets />
          </div>
        </div>
      </div>
    </div>
  );
}

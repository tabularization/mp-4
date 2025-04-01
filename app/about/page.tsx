export default function About() {
  return (
    <div className="min-h-[70vh] text-white flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl text-center font-bold mb-4">DISCLAIMER</h1>
      <p className="text-lg mb-4 text-center max-w-xl">
        This project is a simple stock quote app that allows users to look up real-time market data by entering a ticker
        symbol. It fetches this data securely from Finnhub API.
      </p>
      <p className="text-md text-center max-w-xl">
        This application is for educational and informational purposes only. It is not intended to be, and should not be
        construed as, financial advice, investment guidance, or a recommendation to buy or sell any securities. Always
        consult with a licensed financial advisor before making any financial decisions.
      </p>
      <p className="text-sm text-center mt-4 text-gray-500 max-w-xl">
        The developers of this app are not responsible for any actions taken based on the information presented here.
        Use this tool at your own risk.
      </p>
    </div>
  );
}

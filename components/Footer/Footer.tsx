const Footer = () => {
  return (
    <div className="mt-10 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-20 py-20">
      <div className="flex flex-col space-y-3">
        <h3 className="font-bold text-lg">Support</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
          <p>Help Center</p>
          <p>Safety information</p>
          <p>Cancellation options</p>
          <p>Our Covid-19 Response</p>
          <p>Supporting people with disablitile</p>
          <p>Report a neighborhood concern</p>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h3 className="font-bold text-lg">Community</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
          <p>Disaster relief housing</p>
          <p>Support Afghan refugees</p>
          <p>Combatuing discrimination</p>
          <p></p>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h3 className="font-bold text-lg">Hosting</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
          <p>Try hosting</p>
          <p>Protection for host</p>
          <p>Explore hosting resource</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h3 className="font-bold text-lg">About Us</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Airbnb Luxe</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

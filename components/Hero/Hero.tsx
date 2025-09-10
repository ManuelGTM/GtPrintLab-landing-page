export default function Hero(props) {
  {
    /* Hero Section */
  }
  return (
    <section className="relative py-20 bg-gradient-to-br from-card/30 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          {props.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">{props.text}</p>
      </div>
    </section>
  );
}

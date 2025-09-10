const Footer = () => {

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-foreground-secondary">
            <span>© 2025 프론트엔드_김준서_포트폴리오 Made with React & TypeScript</span>
          </div>

          <div className="text-foreground-secondary">
            <span>Email: rlawnstj901@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

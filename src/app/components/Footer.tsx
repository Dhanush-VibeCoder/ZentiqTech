import { Link } from "react-router";
import logo from "../../assets/logo/zentiqtech-logo.jpg";

export function Footer() {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-muted-foreground text-sm uppercase tracking-[0.18em]">
            <img
              src={logo}
              alt="ZentiqTech logo"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span>© {new Date().getFullYear()} ZentiqTech. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="text-muted-foreground">
              zentiqtech.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

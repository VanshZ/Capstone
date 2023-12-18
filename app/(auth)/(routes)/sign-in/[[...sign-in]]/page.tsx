import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left side (image) */}
      <div style={{ flex: 1 }}>
        <img
          src="https://s3-alpha-sig.figma.com/img/4725/de1a/7f73bab67232e1dd2529840142d3b891?Expires=1704067200&Signature=DVT3mwIC8q8b4Ba0GLRdeP1UW0wOZmYMVmbYuWnUbwf-FBO5Gfa6FF2Z~leUEQjxl1bLH669Bvko9gER9COvhcVPUdZHlGvcXc~-CGyC9DDUeW1yizKZKS3P~hK6Rh-lw9GKycvxjS-VBHcpjFrLdiboyr~F7lc2Lugy8iqxxfhx0pD0mOR8~37lnv4QgrXZnEKhGIfwOJqjr3U3yb1Jz8G9~PXfbm8jbAK8P5HObqXn-rg-u0wU0OmZsJdzLex3X4Nd6jqa80w5m4An7Rd-u6QT0r~cPuSdpRMqzqPWN7Tet-Wg6QE83jj~cgadASQwxS8u3x0VLThwQe~u~oWbFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  // Placeholder image URL
          //alt="ROIPro Real Estate"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Right side (sign-in panel and text) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "400px", padding: "20px", textAlign: "center" }}>
          {/* Header */}
          <h1 style={{ fontSize: "2em", marginBottom: "10px" }}>ROIPro</h1>
          
          {/* Subheader */}
          <p style={{ fontSize: "1em", color: "#666", marginBottom: "20px" }}>
            The future of real estate investing
          </p>

          {/* Sign-in Panel */}
          <div style={{ width: "100%", textAlign: "center" }}>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

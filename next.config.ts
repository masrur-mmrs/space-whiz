import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.3.1', '192.168.50.46', '192.168.50.58', '192.168.50.1', '127.0.0.1'],
};

export default withNextVideo(nextConfig);
import React from "react";

export default function Home({ authenticated }) {
  return (
    <>
      <h1>Welcome Back {authenticated.user}!</h1>
      <p>
        Our mobile phone sales website, where cutting-edge technology meets
        unbeatable prices. Dive into a world of innovation and connectivity with
        our extensive range of smartphones. Whether you're a tech enthusiast, a
        social media maven, or a professional on the go, we have the perfect
        device to suit your needs. From the latest flagship models boasting
        stunning displays and powerful processors to budget-friendly options
        delivering exceptional value, we offer a diverse selection from renowned
        brands. Explore our collection, discover exceptional deals, and elevate
        your mobile experience with our reliable, stylish, and feature-packed
        devices. Experience the future of communication in the palm of your
        hand—shop now and stay connected in style!
      </p>
    </>
  );
}

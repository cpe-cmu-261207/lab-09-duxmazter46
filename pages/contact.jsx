import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IconBrandFacebook, IconPhoneCall, IconMail } from "@tabler/icons";
import MainLayout from "../layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div className="text-center">
        <p className="fw-bold fs-4">Contact</p>

        <p></p>
        <p>
          <strong>Name: </strong>
          Teerit Youngmeesuk
        </p>
        <p>
          <strong>Nickname: </strong>
          Beck
        </p>
        <a
          href="https://www.facebook.com/duxmazter/"
          target="_blank"
          rel="nonrefer"
        >
          <strong>
            <IconBrandFacebook /> Facebook :{" "}
          </strong>
          Beck Teerit
        </a>
        <p />
        <a href="mailto: teerit_young@cmu.ac.th">
          <strong>
            <IconMail />
            Email:{" "}
          </strong>
          teerit_young@cmu.ac.th
        </a>
        <p></p>
        <a href="tel: +66800844663">
          <strong>
            <IconPhoneCall />
            Phone:{" "}
          </strong>
          +66 0800844663
        </a>
      </div>
    </MainLayout>
  );
}

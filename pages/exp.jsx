import { IconStar, IconXboxX } from "@tabler/icons";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function movies() {
  return (
    <MainLayout>
      <div class="card">
        <img
          src="https://prod-discovery.edx-cdn.org/media/course/image/62ed92c9-22b6-43a6-a755-0f296d0f64ce-8b3c8aa8f0af.small.jpeg"
          class="card-img-top"
          height="100%"
          width="100%"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">C++ Coding</h5>
          <p class="card-text">From 1st year in university</p>
          <a
            href="https://www.youtube.com/watch?v=ArHyRqYjip4"
            class="btn btn-success"
            target="_blank"
          >
            Works
          </a>
        </div>
      </div>

      <div class="card">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg"
          class="card-img-top"
          height="100%"
          width="100%"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Python coding</h5>
          <p class="card-text">From last year in highschool</p>
          <a
            href="https://www.youtube.com/watch?v=jz96BCibwNA&ab_channel=FusionMemes"
            class="btn btn-secondary"
            target="_blank"
          >
            Works
          </a>
        </div>
      </div>

      <div class="card">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/1631038470-Ent-JavaProgramming.jpg"
          class="card-img-top"
          height="100%"
          width="100%"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Java coding</h5>
          <p class="card-text">From last year in highschool</p>
          <a
            href="https://www.youtube.com/watch?v=6MebZx-4950&ab_channel=AlexMalex"
            class="btn btn-danger"
            target="_blank"
          >
            Works
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

import React, { Fragment } from 'react';
import SiteTitle from '../../components/SiteTitle';
import faqData from './data.js';
import FaqEntry from './components/FaqEntry';
import sauceSpecialEditionTShirt from './sauce_special_edition_t_shirt.png';

const Faq = () => (
  <Fragment>
    <SiteTitle />
    <h2 className="text-dark-grey text-center text-4xl font-extrabold">FAQs</h2>
    <div className="mx-auto w-5/6 lg:w-1/2 mb-4 mt-5">
    <div className="faqs shadow-lg flex text-mid-grey mb-6 p-4 break-words">
        <div className="pb-2 flex flex-wrap justify-left content-center rounded mx-auto my-5 overflow-hidden w-5/6 lg:w-100 ">
          <h3 className="text-light-blue mb-4">
            Do you have more links with issues I can work with?
          </h3>
          <p className="text-light-grey overflow-auto">
            Sure, look at these ones! 
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/webdriverio/webdriverio/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Afirst-timers-only"
            >
              WebdriverIO - Next-gen browser and mobile automation test framework for Node.js 
            </a>
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Human-Connection/Human-Connection/labels/good%20first%20issue"
            >
              Human-Connection - Free and open-source social network for active citizenship. 
            </a>
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/home-assistant/home-assistant.io/labels/Help%20wanted"
            >
              home-assistant.io - Home Assistant User documentation 
            </a>
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/octokit/octokit.net/labels/up-for-grabs"
            >
              octokit.net - A GitHub API client library for .NET 
            </a>
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/robstoll/atrium/issues"
            >
              atrium - A multiplatform assertion library for Kotlin 
            </a>
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/JabRef/jabref/labels/good%20first%20issue"
            >
              jabref - Graphical Java application for managing BibTeX and biblatex (.bib) databases 
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/openSUSE/osem/labels/good%20first%20issue"
            >
              osem - An event management tool tailored to Free and Open Source Software conferences
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Automattic/wp-calypso/labels/good%20first%20issue"
            >
              wp-calypso - The JavaScript and API powered WordPress.com 
            </a>     
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/phpmyadmin/phpmyadmin/labels/newbie"
            >
              phpmyadmin - A web interface for MySQL and MariaDB
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/freeCodeCamp/freeCodeCamp/labels/help%20wanted"
            >
              freeCodeCamp - freeCodeCamp.org's open source codebase and curriculum. Learn to code at home
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/teacherfund/TeacherFund_next/labels/good%20first%20issue"
            >
              TeacherFund_next - A website to fund teachers discretionary spending because the government sucks at it
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/up-for-grabs/up-for-grabs.net/labels/up-for-grabs"
            >
              up-for-grabs.net - This is a list of projects which have curated tasks specifically for new contributors
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/swapagarwal/swag-for-dev/labels/good%20first%20issue"
            >
              swag-for-dev - 😎 swag opportunities for developers 
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/rust-lang/rust/labels/E-easy"
            >
              rust - Empowering everyone to build reliable and efficient software
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/tldr-pages/tldr/labels/help%20wanted"
            >
              tldr - Collaborative cheatsheets for console commands 
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/cookiecutter/cookiecutter/labels/please-help"
            >
              cookiecutter - A command-line utility that creates projects from cookiecutters (project templates), e.g. Python package projects, VueJS projects
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/ollelauribostrom/rebus/issues"
            >
              rebus - 🌟 👣 Take your first steps as an open source contributor
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/microsoft/TypeScript/labels/good%20first%20issue"
            >
              TypeScript - TypeScript is a superset of JavaScript that compiles to clean JavaScript output
            </a>            
            <hr></hr>
            <a 
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kognise/water.css/labels/good%20first%20issue"
            >
              water.css - A drop-in collection of CSS styles to make simple websites just a little nicer
            </a>            
          </p>
        </div>
      </div>
      {faqData.map(data => (
        <FaqEntry key={data.question} data={data}></FaqEntry>
      ))}
    </div>
    <div className="text-center overflow-hidden">
      <img className="inline object-cover" src={sauceSpecialEditionTShirt} width="900" height="900" alt="Sauce Special Edition T-Shirt" />
    </div>
  </Fragment>
);

export default Faq;

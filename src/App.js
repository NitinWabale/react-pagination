import React, { Component } from "react";
import Heros from "./data/heros.json";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import HeroCard from "./components/HeroCard/HeroCard";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    allHeros: [],
    currentHeros: [],
    page: null,
    total_pages: null,
    pageLimit: null,
  };

  componentDidMount() {
    const allHeros = Heros.data;
    const page= Heros.page;
    const total_pages= Heros.total_pages;
    const pageLimit= Heros.per_page;
    this.setState({ allHeros, page, total_pages, pageLimit });
  }

  onPageChanged = data => {
    const { allHeros } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentHeros = allHeros.slice(offset, offset + pageLimit);
    this.setState({ page: currentPage, currentHeros, total_pages: totalPages });
  };

  render() {
    const {
      allHeros,
      currentHeros,
      page,
      total_pages
    } = this.state;
    const totalHeros = allHeros.length;

    if (totalHeros === 0) return null;

    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      page ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

    return (
      <div className="container mb-5">
        <div>
          <div className="w-100 px-4 d-flex flex-row flex-wrap align-items-center justify-content-between header-bg">
            <div className="d-flex flex-row align-items-center">
            <span className="circle circle-style"></span>
              <h2 className={headerClass}>Super Hero Co.</h2>
              {page && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{page}</span> /{" "}
                  <span className="font-weight-bold">{total_pages}</span>
                </span>
              )}
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination
                totalRecords={totalHeros}
                pageLimit={this.state.pageLimit}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </div>
          </div>
          <div className="w-100 px-4">
              <h2>User Accounts</h2>
              <Button
               onClick= {() =>alert("Thanks for Cliking me!")}
               loading= {false}
              />
            </div>
          {currentHeros.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

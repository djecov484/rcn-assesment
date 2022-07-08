import React, { Component } from 'react'
import '../../app.css'
import { range } from '../../helpers'
import Card from '../../Card'
import Pagination from '../../Pagination'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Users extends Component {
  state = {
    items: [],
    pages: [1, 2, 3, 4, 5],
    currentPage: 1,
    searchValue: '',
  }

  changeSearch = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  fetchData = (url, pages, currentPage, toPage) => {
    fetch(url, pages, currentPage, toPage)
      .then((result) => {
        return result.json()
      })
      .then((d) => {
        pages && currentPage
          ? this.setState({
              items: d.results,
              pages,
              currentPage: toPage,
            })
          : this.setState({
              items: d.results,
            })
      })
  }

  updatePage = (e) => {
    e.preventDefault()

    let { pages, currentPage } = this.state
    const toPage = Number(e.target.getAttribute('data-value'))
    const url = `https://randomuser.me/api/?page=${toPage}&seed=qwer&results=6`

    currentPage !== toPage && toPage > 4
      ? (pages = range(toPage - 2, toPage + 2))
      : (pages = [1, 2, 3, 4, 5])

    currentPage !== toPage && this.fetchData(url, pages, currentPage, toPage)
  }

  componentDidMount() {
    this.fetchData('https://randomuser.me/api/?page=1&seed=qwer&results=6')
  }

  render() {
    const { currentPage, pages, items } = this.state

    const RenderCards = (item, index) => {
      console.log(item.item)
      return (
        <Card
          gender={item.item.gender}
          picture={item.item.picture}
          name={item.item.name}
          location={item.item.location}
          phone={item.item.phone}
          email={item.item.email}
          user={item.item}
          index={index}
        />
      )
    }

    return (
      <div className="app">
        <div className="container">
          <Link to="/">
            <h2>Go to Landing Page</h2>
          </Link>
          <Form className="d-flex">
            <Form.Control
              type="text"
              name="search"
              onChange={this.changeSearch}
              placeholder="Search ..."
              className="mr-sm-1 ml-sm-5"
            ></Form.Control>
          </Form>

          <Pagination
            updatePage={this.updatePage}
            currentPage={currentPage}
            pages={pages}
          />

          <div className="row">
            {items
              .filter(
                (e) =>
                  e.name.first
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase()) ||
                  e.name.last
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase()),
              )
              .map((item, key) => {
                return <RenderCards item={item} index={key} />
              })}
          </div>
        </div>
      </div>
    )
  }
}

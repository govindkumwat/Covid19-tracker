import React, { useEffect, useState } from 'react'
import axios from 'axios';
import _ from "lodash";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { prettyPrintStat } from '../components/Utils/Utils';
import { Searchbar } from './Searchbar';
import { Global } from './Global';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const pageSize = 15;
export const Posts = () => {
    const classes = useStyles();
    const [posts, setposts] = useState()
    const [paginatedPosts, setpaginatedPosts] = useState()
    const [currentPage, setcurrentPage] = useState()
    const [searchTerm, setsearchTerm] = useState('')
  

    const searchHandler = (searchTerm) => {
       setsearchTerm(searchTerm);
       if(searchTerm !== '') {
           const filteredPosts = posts.filter((post) => {
              return post.country.toLowerCase().match(searchTerm.toLowerCase());
           })
           setpaginatedPosts(filteredPosts);
       }else{
        setpaginatedPosts(posts)
       }
    };

    useEffect(() => {
        axios.get('https://corona.lmao.ninja/v3/covid-19/countries')
            .then(res => {
                
                setposts(res.data);
                setpaginatedPosts(_(res.data).slice(0).take(pageSize).value())
            });
    }, []);

    const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)
    const pagination = (pageNo) => {
        setcurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const filteredPosts = _(posts).slice(startIndex).take(pageSize).value();
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(filteredPosts,paginatedPost)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="col-lg-10 col-md-10 col-12 mx-auto">

                    <div className="text-center">
                        <Global />
                        <Searchbar 
                        term = {searchTerm}
                        searchKeyword = {searchHandler}
                        />
                        <p >Country Wise Data</p>
                    </div>
                    {
                        !paginatedPosts ? ("No Data Found") : (
                              <TableContainer component={Paper}>
                                <Table stickyHeader aria-label="sticky table" className={classes.table} size="" aria-label="stickyHeader">
                                    <TableHead  >
                                        <TableRow >
                                            <TableCell align="right" >Country Name</TableCell>
                                            <TableCell align="right">Total Cases</TableCell>
                                            <TableCell align="right">Today Cases</TableCell>
                                            <TableCell align="right">Total Deaths</TableCell>
                                            <TableCell align="right">Today Deaths</TableCell>
                                            <TableCell align="right">Total Recovered</TableCell>
                                            <TableCell align="right">Today Recovered</TableCell>
                                            <TableCell align="right">Active Cases</TableCell>
                                            <TableCell align="right">Critical Cases</TableCell>
                                            <TableCell align="right">Cases Per One Million</TableCell>
                                            <TableCell align="right">Deaths Per One Million</TableCell>
                                            <TableCell align="right">Total Tests</TableCell>
                                            <TableCell align="right">Test Per One Million</TableCell>
                                            <TableCell align="right">Total Population</TableCell>
                                            <TableCell align="right">One Case Per People</TableCell>
                                            <TableCell align="right">One Death Per People</TableCell>
                                            <TableCell align="right">One Test Per People</TableCell>
                                            <TableCell align="right">Active Per One Million</TableCell>
                                            <TableCell align="right">Recovered Per one Million</TableCell>
                                            <TableCell align="right">Critical Per One million</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    
                                    <TableBody>

                                        
                                        {                                       
                                          paginatedPosts.map((post, index) => (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        <img src={post.countryInfo.flag} /> {post.country}
                                                    </TableCell>

                                                    <TableCell align="right">{prettyPrintStat(post.cases)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.todayCases)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.deaths)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.todayDeaths)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.recovered)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.todayRecovered)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.active)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.critical)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.casesPerOneMillion)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.deathsPerOneMillion)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.tests)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.testsPerOneMillion)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.population)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.oneCasePerPeople)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.oneDeathPerPeople)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.oneTestPerPeople)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.activePerOneMillion)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.recoveredPerOneMillion)}</TableCell>
                                                    <TableCell align="right">{prettyPrintStat(post.criticalPerOneMillion)}</TableCell>
                                                </TableRow>
                                            
                                            ))}
                                            

                                         
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        
                         
                         )
                    }
                    <nav aria-label="Page navigation example m-4 " class="table-responsive mb-2">
                        <ul class="pagination mb-0 mt-3">
                            {
                                pages.map((page) => (

                                    <li class={page === currentPage ? "page-item active ms-3" : "page-item ms-3 cursor"}>
                                        <a class="page-link" onClick={() => pagination(page)}>{page}</a></li>
                                ))
                            }

                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

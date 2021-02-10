import React,{Component, lazy, Suspense} from 'react';
import './FoodDetails.css'
import ColumnName from './Pages/cells/ColumnName';
import LoadingPage from './LoadingPage/LoadingPage.js';

const pages = lazy(()=>{import('./Pages/Pages')})

const FoodDetails = ()=>{
        return (
            <div>
                <Suspense fallback={<LoadingPage></LoadingPage>}> <pages query={this.props.List}></pages></Suspense>     
            </div>
        );
 }


export default FoodDetails;

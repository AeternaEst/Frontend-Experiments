import React, {Component} from 'react';
import ShoeView from './ShoeView';
import ComponentWithLoading from './ComponentWithLoading';

const TITLE_ATTRIBUTE = 'Title';
const PRICE_ATTRIBUTE = 'Price';

class ShoeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: null,
            currentSortOrder: null,
            isLoading: true
        }
    }
    render() {
        const { shoes, currentSortOrder, isLoading } = this.state;
        const title = currentSortOrder && currentSortOrder == TITLE_ATTRIBUTE ? `***${TITLE_ATTRIBUTE}***` : TITLE_ATTRIBUTE;
        const price = currentSortOrder && currentSortOrder == PRICE_ATTRIBUTE ? `***${PRICE_ATTRIBUTE}***` : PRICE_ATTRIBUTE;

        return (<div className="shoe-list">
                <div className="shoe-filtering">
                    <a onClick={(event) => this.sort(TITLE_ATTRIBUTE)}>{title}</a>
                    <a onClick={(event) => this.sort(PRICE_ATTRIBUTE)}>{price}</a>
                </div>
                <TestWithLoading shoes={shoes} isLoading={isLoading}/>
            </div>);
    }
    componentDidMount() {
        fetch('https://dk.ecco.com/api/search/find/?pageOffset=0&currentCategoryId=3b25ce36-a4b9-517b-989b-6b6ae6443d98').
        then((data) => data.json()).
        then((data) => {
            this.setState({
                shoes: data.Results.slice(0, 3),
                isLoading: false
            });
        });
    }
    sort(filterAttribute) {
        console.log(`Sorting by ${filterAttribute}`);
        var shoeList = this.state.shoes;
        shoeList = filterAttribute == TITLE_ATTRIBUTE ? 
            shoeList.sort((first, second) => first.Title < second.Title ? -1 : 1) :
            shoeList.sort((first, second) => first.Price < second.Price ? -1 : 1);
        this.setState({
            shoes: shoeList,
            currentSortOrder: filterAttribute
        });
        return false;
    }
}

var Test = (props) => {
    const { shoes } = props;
    if(shoes) {
        return (shoes.map((element, index) => (<div key={index}><ShoeView shoe={element}/></div>)));
    } else {
        return null;
    }
}

var TestWithLoading= ComponentWithLoading(Test);

export default ShoeList;
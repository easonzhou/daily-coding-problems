import debounce from '../debounce';

debounce((word) => {console.log(word);}, 3000)("fuck");
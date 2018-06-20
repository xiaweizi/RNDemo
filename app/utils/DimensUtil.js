import {Dimensions} from 'react-native';

export default class DimensUtil  {

    static getScreenWidth(){
        return Dimensions.get('window').width;
    }

}
import MuiTypography from './components/MuiTypography';
import MuiSelect from './components/MuiSelect';
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'

import MuiRadio from "./components/MuiRadio";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutoComplete from "./components/MuiAutotestComplete";
import FixedTags from "./components/FixedTags";
import MyAutoComp from "./components/MyAutoComp";
import LayOut from "./components/LayOut";
import {ThemeProvider} from "@mui/material/"
import theme from './components/themes/theme' 
//import MuiAutoCompTwo from "./components/MuiAutoCompTwo";
import Testauto from './components/Testauto'
import GridContainer from "./LayOut/Grid";
import According from "./LayOut/According";
import ImgList from "./LayOut/ImgList";
import NavComp from "./LayOut/NavComp";
import BreadcrumbsNav from "./LayOut/Breadcrumbs";
import DrawerComp from "./LayOut/Drawer";
import SpeedDialComp from "./LayOut/SpeedDial";
import BottomNavComp from "./LayOut/BottomNavComp";
import AvatarComp from "./Displaymui/Avatar";
import BageComp from "./Displaymui/BageComp";
import ListItemsComp from "./Displaymui/ListItems";
import ChipComp from "./Displaymui/ChipComp";
import TabelComp from "./Displaymui/TabelComp";
import AlertComp from "./feedbackComp/AlertComp";
import SnackComp from "./Displaymui/SnackComp";
import DialogComp from "./feedbackComp/DialogComp";
import ProgressComp from "./feedbackComp/ProgressComp";
import SkeletonComp from "./feedbackComp/SkeletonComp";
import LoadButton from "./labmaterial/LoadButton";
import DatePickerComp from './labmaterial/DatePickerComp';
import DateRangePickerComp from './labmaterial/DateRangePickerComp';
import TabComp from './labmaterial/TabComp';
import TimeLineComp from './labmaterial/TimeLineComp';
import MasonryComp from './labmaterial/MasonryComp';
import Responsive from './components/Responsive';
import DivsWithTheme from './test/DivsWithTheme';
import Other from './LayOut/OtherNames'; 
import ReviewDefecults from './test/ReviewDefecults';
import FormComp from './materialFormik/FormComp';
import FormikContainer from './Formik/FormikContainer';
import AutoCompeleteToFormik from './Formik/fields/AutoCompelete';
import BackdropLayComp from './LayOut/BackdropLayComp';

function App() {
  return (
   <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
        {/*<NavComp />*/}
        
        {/*<TabComp />*/}
        {/*<ChipComp /> in tapCop*/}
        {/*<BreadcrumbsNav />*/}
        {/*<SpeedDialComp />*/}
        {/*<AvatarComp />*/}
        {/*<ListItemsComp/>*/}
        {/*<DrawerComp />*/}
        {/*<MuiTypography />*/}
        {/*<MuiSelect />*/} 
        {/*<MuiRadio theme={theme} />*/}
        {/*<MuiCheckBox />*/}
        {/*<MuiSwitch />*/}
        {/*<MuiRating />*/}
        {/*<MuiAutoComplete />*/}
        {/*<FixedTags />*/}
      {/*<MyAutoComp />*/}
      {/*<LayOut theme={theme}/>*/}
      {/*<MuiCheckBox/>*/}
      {/*<MuiSwitch /> */}  
      {/*<MuiAutoComplete />*/}
      {/*<Testauto />*/}
      {/*<GridContainer />*/}
      {/*<According />*/}
      {/*<ImgList />*/}
      {/*<BageComp />*/}
      {/*<AlertComp />*/}
       {/*<TabelComp />*/}
      {/*<SnackComp />*/}
      {/*<DialogComp />*/}
      {/*<ProgressComp />*/}
      {/*<SkeletonComp/>*/}
      {/*<LoadButton />*/}
      {/*//<DatePickerComp />The called component are not valid in this version*/} 
      {/*<DateRangePickerComp />*/}
      {/*<TimeLineComp />*/}
      {/*<MasonryComp />*/}
      {/*<Responsive theme={theme}/>*/}
      {/*<Responsive theme={theme} />*/}
      {/*<BackdropLayComp/>*/}
      
     {/* <DivsWithTheme />*/}
     {/* <ReviewDefecults />*/}
    {/*<SpeedDialComp/> for a few minutes*/}
    {/*<FormComp />*/}
    {/*<FormikContainer />*/}
    {/*<BottomNavComp/>*/}
    </div>
    </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/media-query.css";
import OnboardingPage from "./pages/OnboardingPage";
import LetYouScreen from "./pages/LetYouScreen";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./pages/ForgetPassword";
import CheckMailScreen from "./pages/CheckMailScreen";
import ResetPasswordScreen from "./pages/ResetPasswordScreen";
import VerifyScreen from "./pages/VerifyScreen";
import NotificationAllow from "./pages/NotificationAllow";
import PreferredLanguage from "./pages/PreferredLanguage";
import PrimaryGoalScreen from "./pages/PrimaryGoalScreen";
import SpendLearning from "./pages/SpendLearning";
import InterestScreen from "./pages/InterestScreen";
import SelectCoursesScreen from "./pages/SelectCoursesScreen";
import HomeScreen from "./pages/HomeScreen";
import Notification from "./pages/Notification";
import CategoryScreen from "./pages/CategoryScreen";
import Business from "./pages/Business";
import SingleCourseDescription from "./pages/SingleCourseDescription";
import TrendingCourse from "./pages/TrendingCourse";
import CheckOutScreen from "./pages/CheckOutScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PaymentSuccessfulScreen from "./pages/PaymentSuccessfulScreen";
import ApplyCoupon from "./pages/ApplyCoupon";
import MentorScreen from "./pages/MentorScreen";
import FilterScreen from "./pages/FilterScreen";
import NewReleaseCourse from "./pages/NewReleaseCourse";
import Bookmark from "./pages/Bookmark";
import CourseOngoingScreen from "./pages/CourseOngoingScreen";
import SingleCourseOngoing from "./pages/SingleCourseOngoing";
import ChatScreen from "./pages/ChatScreen";
import SingleChatScreen from "./pages/SingleChatScreen";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import WallletScreen from "./pages/WalletScreen";
import SingleMentor from "./pages/SingleMentor";
import NotificationOption from "./pages/NotificationOption";
import Language from "./pages/Language";
import Currency from "./pages/Currency";
import AboutUsScreen from "./pages/AboutUsScreen";
import PolicyScreen from "./pages/PolicyScreen";
import FaqScreen from "./pages/FaqScreen";
import FeedBackScreen from "./pages/FeedBackScreen";
import CompleteCourseRating from "./pages/CompleteCourseRating";
import ReviewScreen from "./pages/ReviewScreen";
import SearchResultFound from "./pages/SearchResultFound";
import SingleCourseComplete from "./pages/SingleCourseComplete";
import SearchNoResultScreen from "./pages/SearchNoResultScreen";
import BottomNavigation from "./components/BottomNavigation";

function App() {

  const location = useLocation(); // Get the current location

  // Define the pages where BottomNavigation is needed
  const pagesWithBottomNavigation = [
    "/homescreen",
    "/chat-screen",
    "/profile",
    "/bookmark",
    "/course-ongoing-screen",
  ];


  return (
    <div className="App">
      <Routes>
        <Route path="" element={<OnboardingPage />} />
        <Route path="/letyouscreen" element={<LetYouScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/checkmailscreen" element={<CheckMailScreen />} />
        <Route path="/resetpasswordscreen" element={<ResetPasswordScreen />} />
        <Route path="/verifyscreen" element={<VerifyScreen />} />
        <Route path="/notificationallow" element={<NotificationAllow />} />
        <Route path="/preferredlanguage" element={<PreferredLanguage />} />
        <Route path="/primarygoalscreen" element={<PrimaryGoalScreen />} />
        <Route path="/spendlearning" element={<SpendLearning />} />
        <Route path="/interestscreen" element={<InterestScreen />} />
        <Route
          path="/select-courses-screen"
          element={<SelectCoursesScreen />}
        />
        <Route path="/search-result-found" element={<SearchResultFound />} />
        <Route
          path="search-noresult-screen"
          element={<SearchNoResultScreen />}
        />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/categoryscreen" element={<CategoryScreen />} />
        <Route path="/business" element={<Business />} />
        <Route
          path="/single-course-description"
          element={<SingleCourseDescription />}
        />
        <Route path="/trending-course" element={<TrendingCourse />} />
        <Route path="/checkoutscreen" element={<CheckOutScreen />} />
        <Route path="/payment-screen" element={<PaymentScreen />} />
        <Route
          path="/payment-successfull-screen"
          element={<PaymentSuccessfulScreen />}
        />
        <Route path="/apply-coupon" element={<ApplyCoupon />} />
        <Route path="/mentor-screen" element={<MentorScreen />} />
        <Route path="/filter-screen" element={<FilterScreen />} />
        <Route path="/new-release-course" element={<NewReleaseCourse />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route
          path="/course-ongoing-screen"
          element={<CourseOngoingScreen />}
        />
        <Route
          path="/single-course-ongoing"
          element={<SingleCourseOngoing />}
        />
        <Route
          path="/single-course-complete"
          element={<SingleCourseComplete />}
        />
        <Route path="/chat-screen" element={<ChatScreen />} />
        <Route path="/single-chat-screen" element={<SingleChatScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/wallet-screen" element={<WallletScreen />} />
        <Route path="/wallet-screen" element={<WallletScreen />} />
        <Route path="/single-mentor" element={<SingleMentor />} />
        <Route path="/notification-option" element={<NotificationOption />} />
        <Route path="/language" element={<Language />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/about-us-screen" element={<AboutUsScreen />} />
        <Route path="/policy-screen" element={<PolicyScreen />} />
        <Route path="/faq-screen" element={<FaqScreen />} />
        <Route path="/feedback-screen" element={<FeedBackScreen />} />
        <Route
          path="/complete-course-rating"
          element={<CompleteCourseRating />}
        />
        <Route path="/review-screen" element={<ReviewScreen />} />
        <Route path="" element={<Footer />} />
      </Routes>
      {/* Conditionally render BottomNavigation based on the current path */}
      {pagesWithBottomNavigation.includes(location.pathname) && (
        <BottomNavigation />
      )}
    </div>
  );
}

export default App;

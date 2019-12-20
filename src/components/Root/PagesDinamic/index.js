import React, { lazy } from 'react';

export const DesktopPage = lazy(() => import('../../Pages/PersonalAccountPage/DesktopPage'));
export const ClinicsPage = lazy(() => import('../../Pages/PersonalAccountPage/DesktopPage/DoctorsTab/ClinicsPage'));

export const ApplicationsPage = lazy(() => import('../../Pages/PersonalAccountPage/ApplicationsPage'));
export const DocumentsPage = lazy(() => import('../../Pages/PersonalAccountPage/DocumentsPage'));
export const ItSupportPage = lazy(() => import('../../Pages/PersonalAccountPage/ItSupportPage'));
export const StatisticsHealthPage = lazy(() => import('../../Pages/PersonalAccountPage/StatisticsHealthPage'));

export const MainPage = lazy(() => import('../../Pages/MainPage'));
export const AboutPage = lazy(() => import('../../Pages/AboutPage'));



export const DiagnosisPage = lazy(() => import('../../Pages/DiagnosisPage'));
export const TreatmentPage = lazy(() => import('../../Pages/TreatmentPage'));
export const ObservationPage = lazy(() => import('../../Pages/ObservationPage'));

export const AoamtPage = lazy(() => import('../../Pages/AoamtPage'));
export const DoctorsPage = lazy(() => import('../../Pages/DoctorsPage'));
export const ReviewsPage = lazy(() => import('../../Pages/ReviewsPage'));

export const CreateAccountPage = lazy(() => import('../../Pages/CreateAccountPage'));
export const PasswordRecoveryPage = lazy(() => import('../../Pages/PasswordRecoveryPage'));
export const SignInPage = lazy(() => import('../../Pages/SignInPage'));
export const PersonalAccountPage = lazy(() => import('../../Pages/PersonalAccountPage'));




export const ServicesPage = lazy(() => import('../../Pages/ServicesPage'));
export const ReceptionPage = lazy(() => import('../../Pages/ReceptionPage'));
export const PrivacyPolicyPage = lazy(() => import('../../Pages/PrivacyPolicyPage'));
export const PersonalDataPage = lazy(() => import('../../Pages/PersonalDataPage'));

export const NotFoundPage = lazy(() => import('../../Pages/NotFoundPage'));

import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';

const Experience = lazy(() => import('../components/pages/Experience'));
const Journey = lazy(() => import('../components/pages/Journey'));

const AppRoutes = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div className="container py-5">{t('common.loading')}</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

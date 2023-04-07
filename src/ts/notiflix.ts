import * as notiflix from 'notiflix';

notiflix.Report.init({
    backgroundColor: 'var(--color-primary)',
    success: {
        messageColor: 'var(--text-main)',
        titleColor: 'var(--text-main)',
    }
});
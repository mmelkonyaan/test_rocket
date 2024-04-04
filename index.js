import headerContent from './header.html';
import bodyContent from './body.html';
import footerContent from './footer.html';

document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = headerContent + bodyContent + footerContent;
});

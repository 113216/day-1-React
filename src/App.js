import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  let pricecards = [{
    plan: 'FREE',
    price: '0',
    features: [{
      title: 'Single User',
      txtpro: false
    }, {
      title: '5GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: true
    }, {
      title: 'Dedicated Phone Support',
      txtpro: true
    }, {
      title: 'Free Subdomain',
      txtpro: true
    }, {
      title: 'Monthly Status Reports',
      txtpro: true
    }]
  }, {
    plan: 'PLUS',
    price: '9',
    features: [{
      title: '5 User',
      txtpro: false
    }, {
      title: '50GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: false
    }, {
      title: 'Dedicated Phone Support',
      txtpro: false
    }, {
      title: 'Free Subdomain',
      txtpro: false
    }, {
      title: 'Monthly Status Reports',
      txtpro: true
    }]
  }, {
    plan: 'PRO',
    price: '49',
    features: [{
      title: 'Unlimited User',
      txtpro: false
    }, {
      title: '150GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: false
    }, {
      title: 'Dedicated Phone Support',
      txtpro: false
    }, {
      title: 'Unlimited Free Subdomain',
      txtpro: false
    }, {
      title: 'Monthly Status Reports',
      txtpro: false
    }]
  }];
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {pricecards.map((card) => < Card card={card} />)}
      </div>
    </div>
  </section>
  );

    }
export default App;

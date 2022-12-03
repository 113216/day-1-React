import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


function Card ({card}){
return (
   
    <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{card.plan}</h5>
        <h6 class="card-price text-center">${card.price}<span class="period">/month</span></h6>
        <hr></hr>
        <ul class="fa-ul">
                        {card.features.map((items) =>
                            <li class={`${items.txtpro ? "text-muted" : ""}`}>
                                <span class="fa-li">
                                    < FontAwesomeIcon icon={items.txtpro ? faTimes : faCheck} />
                                </span>
                                {items.title}
                            </li>
                        )}
                    </ul>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
      </div>
      </div>
    
)
}

export default Card;
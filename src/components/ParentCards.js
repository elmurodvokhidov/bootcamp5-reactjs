import Card from './Card';

function ParentCards() {
    let about = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium delectus consectetur asperiores blanditiis ipsam totam?';

    return (
        <div className="parentCards">
            <Card
                image='https://reqres.in/img/faces/7-image.jpg'
                name='Michael Lawson'
                about={about}
            />
            <Card
                image='https://reqres.in/img/faces/8-image.jpg'
                name='Lindsay Ferguson'
                about={about}
            />
            <Card 
                image='https://reqres.in/img/faces/9-image.jpg'
                name='Tobias Funke'
                about={about}
            />
        </div>
    )
};

export default ParentCards;
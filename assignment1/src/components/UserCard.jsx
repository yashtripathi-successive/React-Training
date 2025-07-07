
 /* Q2 */



const UserCard = ({  name, email, avatarurl })=> {
    return ( 
    <div>
    
    <p>{name}</p>
    <p>{email}</p>
    <img src={avatarurl} width="150" height="150" />
    </div>
 );
}

export default UserCard;
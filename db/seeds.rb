Resort.delete_all
User.delete_all

blue_hills = Resort.create(
  name: 'Blue Hills Ski Area', 
  website: 'https://www.bluehillsboston.com/', 
  city: 'Canton', 
  state: 'MA',
  latitude: 42.2159649,
  longitude: -71.1212491)
Resort.create(
  name: 'Wachusett Mountain', 
  website: 'https://www.wachusett.com/', 
  city: 'Westminster', 
  state: 'MA',
  latitude: 42.5108592,
  longitude: -71.8883425)
sugarloaf = Resort.create(
  name: 'Sugarloaf', 
  website: 'https://www.sugarloaf.com/', 
  city: 'Carrabassett Valley', 
  state: 'ME',
  latitude: 45.0314728,
  longitude: -70.3306756)
Resort.create(
  name: 'Sunday River', 
  website: 'https://www.sundayriver.com/', 
  city: 'Newry', 
  state: 'ME',
  latitude: 44.473422,
  longitude: -70.8590667)

test_user = User.create(email:'testpass@example.com', password: 'password')

test_user.resorts << blue_hills
test_user.resorts << sugarloaf
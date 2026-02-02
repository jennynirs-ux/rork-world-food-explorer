/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const landscapeMapping = {
  'Afghanistan': 'https://images.unsplash.com/photo-1586339277861-b0b8c885dd06?w=800&q=80',
  'Albania': 'https://images.unsplash.com/photo-1591194255768-97f1df39bbae?w=800&q=80',
  'Algeria': 'https://images.unsplash.com/photo-1567355256384-09f3b48dae87?w=800&q=80',
  'Andorra': 'https://images.unsplash.com/photo-1609820006052-e0c7e4a06e6e?w=800&q=80',
  'Angola': 'https://images.unsplash.com/photo-1568632234200-5b0a8f1ac4e8?w=800&q=80',
  'Antigua and Barbuda': 'https://images.unsplash.com/photo-1606146364533-49c1b4e5cc8e?w=800&q=80',
  'Argentina': 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
  'Armenia': 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
  'Australia': 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
  'Austria': 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80',
  'Azerbaijan': 'https://images.unsplash.com/photo-1571418943669-00d6a3af9531?w=800&q=80',
  'Bahamas': 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
  'Bahrain': 'https://images.unsplash.com/photo-1590320011151-88b21aac7bb7?w=800&q=80',
  'Bangladesh': 'https://images.unsplash.com/photo-1553525033-1b6f8c04f5ec?w=800&q=80',
  'Barbados': 'https://images.unsplash.com/photo-1588675646184-fcd87f2c3b11?w=800&q=80',
  'Belarus': 'https://images.unsplash.com/photo-1606414939477-a27cdf1fae0d?w=800&q=80',
  'Belgium': 'https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&q=80',
  'Belize': 'https://images.unsplash.com/photo-1615274242889-e9fb4c16b0b0?w=800&q=80',
  'Benin': 'https://images.unsplash.com/photo-1545447934-c06e65e3d58d?w=800&q=80',
  'Bhutan': 'https://images.unsplash.com/photo-1545436913-2d6550e1f44f?w=800&q=80',
  'Bolivia': 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=800&q=80',
  'Bosnia and Herzegovina': 'https://images.unsplash.com/photo-1591194255768-97f1df39bbae?w=800&q=80',
  'Botswana': 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
  'Brazil': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
  'Brunei': 'https://images.unsplash.com/photo-1594387030-15d45046ba60?w=800&q=80',
  'Bulgaria': 'https://images.unsplash.com/photo-1609137237950-e436e9c3f495?w=800&q=80',
  'Burkina Faso': 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
  'Burundi': 'https://images.unsplash.com/photo-1609197642428-c6e5a18a2e42?w=800&q=80',
  'Cabo Verde': 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
  'Cape Verde': 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
  'Cambodia': 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
  'Cameroon': 'https://images.unsplash.com/photo-1572469176012-d3f8e6c8c32c?w=800&q=80',
  'Canada': 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80',
  'Central African Republic': 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
  'Chad': 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
  'Chile': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
  'China': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
  'Colombia': 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&q=80',
  'Comoros': 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80',
  'Costa Rica': 'https://images.unsplash.com/photo-1503450668240-b4b6e8511d3e?w=800&q=80',
  'Croatia': 'https://images.unsplash.com/photo-1508790472953-42c96f3b571a?w=800&q=80',
  'Cuba': 'https://images.unsplash.com/photo-1545319261-b95e3f566129?w=800&q=80',
  'Cyprus': 'https://images.unsplash.com/photo-1537349945967-0b73be358c8f?w=800&q=80',
  'Czechia': 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
  'Czech Republic': 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
  'Denmark': 'https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=800&q=80',
  'Djibouti': 'https://images.unsplash.com/photo-1608544671341-ba5afaff8653?w=800&q=80',
  'Dominica': 'https://images.unsplash.com/photo-1606150498605-cace41df26a7?w=800&q=80',
  'Dominican Republic': 'https://images.unsplash.com/photo-1606146719364-de79f6cb4f58?w=800&q=80',
  'Ecuador': 'https://images.unsplash.com/photo-1518399519228-97f81b35f2d5?w=800&q=80',
  'Egypt': 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
  'El Salvador': 'https://images.unsplash.com/photo-1572920650216-e842e1c3e1b5?w=800&q=80',
  'Equatorial Guinea': 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&q=80',
  'Eritrea': 'https://images.unsplash.com/photo-1621276643925-4ae5b2db1b7c?w=800&q=80',
  'Estonia': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
  'Eswatini': 'https://images.unsplash.com/photo-1591191564326-59e2ce4a49f5?w=800&q=80',
  'Ethiopia': 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80',
  'Fiji': 'https://images.unsplash.com/photo-1587897773780-08046b96e42e?w=800&q=80',
  'Finland': 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
  'France': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
  'Gabon': 'https://images.unsplash.com/photo-1564659277907-2456d3f74c12?w=800&q=80',
  'Gambia': 'https://images.unsplash.com/photo-1609198092357-a6229357c6b1?w=800&q=80',
  'Georgia': 'https://images.unsplash.com/photo-1607968565043-36af90dde238?w=800&q=80',
  'Germany': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
  'Ghana': 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80',
  'Greece': 'https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?w=800&q=80',
  'Grenada': 'https://images.unsplash.com/photo-1580130732478-d3ce8e5b1320?w=800&q=80',
  'Guatemala': 'https://images.unsplash.com/photo-1554960750-9e4e2d43f99a?w=800&q=80',
  'Guinea': 'https://images.unsplash.com/photo-1565003190833-681f86c06abc?w=800&q=80',
  'Guinea-Bissau': 'https://images.unsplash.com/photo-1571627665157-97c7efeb6c89?w=800&q=80',
  'Guyana': 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?w=800&q=80',
  'Haiti': 'https://images.unsplash.com/photo-1624298357797-c465515c2e1d?w=800&q=80',
  'Honduras': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
  'Hungary': 'https://images.unsplash.com/photo-1526994113668-98ef4c1c946d?w=800&q=80',
  'Iceland': 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80',
  'India': 'https://images.unsplash.com/photo-1524230507669-66a6e6c6f32e?w=800&q=80',
  'Indonesia': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  'Iran': 'https://images.unsplash.com/photo-1598536992720-5ddb8ff0f066?w=800&q=80',
  'Iraq': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
  'Ireland': 'https://images.unsplash.com/photo-1529665730134-02d82a6d71a0?w=800&q=80',
  'Israel': 'https://images.unsplash.com/photo-1590944943172-6b79b75c8c30?w=800&q=80',
  'Jamaica': 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800&q=80',
  'Jordan': 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80',
  'Kazakhstan': 'https://images.unsplash.com/photo-1583252904618-0c5e5aa5a808?w=800&q=80',
  'Kenya': 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80',
  'Kiribati': 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80',
  'Kuwait': 'https://images.unsplash.com/photo-1583203580674-37318bcb3718?w=800&q=80',
  'Kyrgyzstan': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80',
  'Laos': 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800&q=80',
  'Latvia': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
  'Lebanon': 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
  'Lesotho': 'https://images.unsplash.com/photo-1607234279747-12f3d4ca3c2e?w=800&q=80',
  'Liberia': 'https://images.unsplash.com/photo-1585662018872-068b7fb6f9f2?w=800&q=80',
  'Libya': 'https://images.unsplash.com/photo-1575548752054-e3d94c9f2772?w=800&q=80',
  'Liechtenstein': 'https://images.unsplash.com/photo-1601841197690-6f0c3c0c9f0c?w=800&q=80',
  'Lithuania': 'https://images.unsplash.com/photo-1601823984263-b55a23f3b26f?w=800&q=80',
  'Luxembourg': 'https://images.unsplash.com/photo-1585210992116-e1d0e8f3e5f6?w=800&q=80',
  'Madagascar': 'https://images.unsplash.com/photo-1595436208082-5e86ab37111e?w=800&q=80',
  'Malawi': 'https://images.unsplash.com/photo-1621268329997-1b8c4f4d3e3f?w=800&q=80',
  'Malaysia': 'https://images.unsplash.com/photo-1508062878650-88b52897f298?w=800&q=80',
  'Maldives': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  'Mali': 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80',
  'Malta': 'https://images.unsplash.com/photo-1551600469-6dd74c37f44e?w=800&q=80',
  'Marshall Islands': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  'Mauritania': 'https://images.unsplash.com/photo-1609439547168-c973842210e1?w=800&q=80',
  'Mauritius': 'https://images.unsplash.com/photo-1548841486-36e8b9db1024?w=800&q=80',
  'Micronesia': 'https://images.unsplash.com/photo-1583259426481-02e9e5153d11?w=800&q=80',
  'Moldova': 'https://images.unsplash.com/photo-1621522767402-2c5bcde2c0f4?w=800&q=80',
  'Monaco': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
  'Mongolia': 'https://images.unsplash.com/photo-1584894247808-7e99eb4f8e32?w=800&q=80',
  'Montenegro': 'https://images.unsplash.com/photo-1600787561518-8ea1d4e16b7c?w=800&q=80',
  'Mozambique': 'https://images.unsplash.com/photo-1609691624111-12b2e09c9bfe?w=800&q=80',
  'Myanmar': 'https://images.unsplash.com/photo-1551634979-1d8b69bfe73f?w=800&q=80',
  'Namibia': 'https://images.unsplash.com/photo-1516898427220-29aaed55f93e?w=800&q=80',
  'Nauru': 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80',
  'Nepal': 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80',
  'Netherlands': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
  'New Zealand': 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80',
  'Nicaragua': 'https://images.unsplash.com/photo-1580165513309-0baacd7e85e0?w=800&q=80',
  'Niger': 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80',
  'Nigeria': 'https://images.unsplash.com/photo-1608483086010-e9b46c2a0e2b?w=800&q=80',
  'North Korea': 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800&q=80',
  'North Macedonia': 'https://images.unsplash.com/photo-1605358260241-0d565d6c2a5d?w=800&q=80',
  'Norway': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
  'Oman': 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&q=80',
  'Pakistan': 'https://images.unsplash.com/photo-1598092116834-9c3df19fc9f9?w=800&q=80',
  'Palau': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  'Panama': 'https://images.unsplash.com/photo-1581104477881-3eb5f0a75cdc?w=800&q=80',
  'Papua New Guinea': 'https://images.unsplash.com/photo-1505881402582-763970a1e27e?w=800&q=80',
  'Paraguay': 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&q=80',
  'Peru': 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
  'Poland': 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&q=80',
  'Portugal': 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80',
  'Qatar': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
  'Romania': 'https://images.unsplash.com/photo-1564221710304-0b37c2e6d6b7?w=800&q=80',
  'Russia': 'https://images.unsplash.com/photo-1523293182945-7b4c51d5aa63?w=800&q=80',
  'Rwanda': 'https://images.unsplash.com/photo-1591838275844-9e0e92f0e696?w=800&q=80',
  'Saint Kitts and Nevis': 'https://images.unsplash.com/photo-1580130732478-d3ce8e5b1320?w=800&q=80',
  'Saint Lucia': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  'Saint Vincent and the Grenadines': 'https://images.unsplash.com/photo-1589900243325-be2362b90ff4?w=800&q=80',
  'Samoa': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  'San Marino': 'https://images.unsplash.com/photo-1605359911985-f6a9af9d3a91?w=800&q=80',
  'Sao Tome and Principe': 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80',
  'Saudi Arabia': 'https://images.unsplash.com/photo-1588347818036-11cc3c8b3d9e?w=800&q=80',
  'Senegal': 'https://images.unsplash.com/photo-1610878180933-123728745d22?w=800&q=80',
  'Serbia': 'https://images.unsplash.com/photo-1607799632518-da91dd151b38?w=800&q=80',
  'Seychelles': 'https://images.unsplash.com/photo-1587897773780-08046b96e42e?w=800&q=80',
  'Sierra Leone': 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
  'Singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
  'Slovakia': 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
  'Slovenia': 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?w=800&q=80',
  'Solomon Islands': 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800&q=80',
  'Somalia': 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=800&q=80',
  'South Africa': 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&q=80',
  'South Korea': 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80',
  'South Sudan': 'https://images.unsplash.com/photo-1558769132-cb1aea2f8db7?w=800&q=80',
  'Spain': 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80',
  'Sri Lanka': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  'Sudan': 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&q=80',
  'Suriname': 'https://images.unsplash.com/photo-1606224221964-3e0b4a2cf61f?w=800&q=80',
  'Switzerland': 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
  'Syria': 'https://images.unsplash.com/photo-1578421170262-7c50d8f1f68b?w=800&q=80',
  'Tajikistan': 'https://images.unsplash.com/photo-1600693026104-81d9b3e6c6f3?w=800&q=80',
  'Tanzania': 'https://images.unsplash.com/photo-1612171445874-7abf7f8d8c8b?w=800&q=80',
  'Thailand': 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
  'Timor-Leste': 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800&q=80',
  'East Timor': 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=800&q=80',
  'Togo': 'https://images.unsplash.com/photo-1585662018872-068b7fb6f9f2?w=800&q=80',
  'Tonga': 'https://images.unsplash.com/photo-1589197331516-6c5d7f4f7f3c?w=800&q=80',
  'Trinidad and Tobago': 'https://images.unsplash.com/photo-1633788278944-8b9e6c4c1e1d?w=800&q=80',
  'Tunisia': 'https://images.unsplash.com/photo-1564769610726-dada876d4d74?w=800&q=80',
  'Turkey': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  'Turkmenistan': 'https://images.unsplash.com/photo-1609098655732-ab0d80e54822?w=800&q=80',
  'Tuvalu': 'https://images.unsplash.com/photo-1581522378314-2e7e5c7b0b78?w=800&q=80',
  'Uganda': 'https://images.unsplash.com/photo-1616364896947-8f2d7c7c3f3e?w=800&q=80',
  'Ukraine': 'https://images.unsplash.com/photo-1565123209285-8910b7e4353b?w=800&q=80',
  'United Arab Emirates': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  'United Kingdom': 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=800&q=80',
  'United States of America': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'United States': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'Uruguay': 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80',
  'Uzbekistan': 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
  'Vanuatu': 'https://images.unsplash.com/photo-1589900243325-be2362b90ff4?w=800&q=80',
  'Vatican City': 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80',
  'Venezuela': 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&q=80',
  'Vietnam': 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
  'Zambia': 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
  'Zimbabwe': 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80',
  'Côte d\'Ivoire': 'https://images.unsplash.com/photo-1591645264158-bff8c01b8d37?w=800&q=80',
  'Democratic Republic of the Congo': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb0?w=800&q=80',
  'Republic of the Congo': 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  'Italy': 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
  'Japan': 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80',
  'Mexico': 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80',
  'Morocco': 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  'Palestine': 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
  'Philippines': 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
  'Sweden': 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80',
  'Yemen': 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&q=80',
};

const countriesDir = path.join(__dirname, 'data', 'countries');
const files = fs.readdirSync(countriesDir);

let updated = 0;
let notFound = 0;

files.forEach(file => {
  if (!file.endsWith('.ts')) return;
  
  const filePath = path.join(countriesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const nameMatch = content.match(/name: ['"](.+?)['"]/);
  if (!nameMatch) {
    console.log(`⚠️  Could not find country name in ${file}`);
    return;
  }
  
  const countryName = nameMatch[1];
  const newUrl = landscapeMapping[countryName];
  
  if (!newUrl) {
    console.log(`⚠️  No landscape URL found for ${countryName}`);
    notFound++;
    return;
  }
  
  const landscapeRegex = /landscapeImage: ['"]https:\/\/[^'"]+['"]/;
  const hasLandscape = landscapeRegex.test(content);
  
  if (!hasLandscape) {
    console.log(`⚠️  No landscapeImage found in ${file}`);
    return;
  }
  
  content = content.replace(landscapeRegex, `landscapeImage: '${newUrl}'`);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  updated++;
  console.log(`✅ Updated ${countryName} (${file})`);
});

console.log(`\n✨ Done! Updated ${updated} countries, ${notFound} not found in mapping.`);

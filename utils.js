// generate a string that length is range from 100 to 250
function generateRandomString() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // const digits = '0123456789';

    const randomLength = Math.floor(Math.random() * 150) + 100;
    let randomString = '';

    for (var i = 0; i < randomLength; i++) {
        randomString += alphabet[Math.floor(Math.random() * alphabet.length)];

        if (i % 10 === 0) {
            randomString += ' ';
        }
    }

    return randomString;
}

function generateRandomObject(transform=false) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
  
    const names = ['홍길동', '이순신', '장보고', '을지문'];
    const addresses = ['서울시 강남구', '경기도 수원시', '부산시 해운대구', '인천광역시 중구'];
    const phones = ['010', '011', '016', '019'];
  
    const itemTypes = ['과일류', '채소류', '육류', '해산물'];
    const fruitKinds = ['사과', '배', '딸기', '복숭아'];
    const vegetableKinds = ['상추', '배추', '고추', '오이'];
    const meatKinds = ['소고기', '돼지고기', '닭고기', '양고기'];
    const seafoodKinds = ['참치', '새우', '오징어', '문어'];
  
    const randomBuyName = names[Math.floor(Math.random() * names.length)];
    const randomBuyBirth = `${Math.floor(Math.random() * 100) + 1920}.${Math.floor(Math.random() * 12) + 1}.${Math.floor(Math.random() * 28) + 1}`;
    const randomBuyAddress = addresses[Math.floor(Math.random() * addresses.length)] + ' ' + alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase() + alphabet.substr(1, 2);
    const randomBuyPhone = phones[Math.floor(Math.random() * phones.length)] + digits.substr(Math.floor(Math.random() * digits.length), 4) + digits.substr(Math.floor(Math.random() * digits.length), 4);
    const randomBuySubPhone = phones[Math.floor(Math.random() * phones.length)] + digits.substr(Math.floor(Math.random() * digits.length), 4) + digits.substr(Math.floor(Math.random() * digits.length), 4);
    const randomSellerName = names[Math.floor(Math.random() * names.length)];
    const randomSellerBirth = `${Math.floor(Math.random() * 100) + 1920}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`;
    const randomSellerAddress = addresses[Math.floor(Math.random() * addresses.length)] + ' ' + alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase() + alphabet.substr(1, 2);
    const randomSellerPhone = phones[Math.floor(Math.random() * phones.length)] + digits.substr(Math.floor(Math.random() * digits.length), 4) + digits.substr(Math.floor(Math.random() * digits.length), 4);
    const randomSellerSubPhone = phones[Math.floor(Math.random() * phones.length)] + digits.substr(Math.floor(Math.random() * digits.length), 4) + digits.substr(Math.floor(Math.random() * digits.length), 4);
    const randomItemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    const randomKind = randomItemType === '과일류' ? fruitKinds[Math.floor(Math.random() * fruitKinds.length)] :
    randomItemType === '채소류' ? vegetableKinds[Math.floor(Math.random() * vegetableKinds.length)] :
    randomItemType === '육류' ? meatKinds[Math.floor(Math.random() * meatKinds.length)] : seafoodKinds[Math.floor(Math.random() * seafoodKinds.length)];

    const randomAreaFlat = Math.floor(Math.random() * 30) + 1;
    const randomFormalDay = `2022-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`;
    const randomTotalPrice = Math.floor(Math.random() * 1000) + 100;
    const randomFirstYn = Math.floor(Math.random() * 2) === 0;
    const randomFirstPrice = randomFirstYn ? Math.floor(Math.random() * 300) + 100 : 0;
    const randomFirstEndCount = randomFirstYn ? Math.floor(Math.random() * 10) + 1 : 0;
    const randomSecondYn = Math.floor(Math.random() * 2) === 0;
    const randomSecondPrice = randomSecondYn ? Math.floor(Math.random() * 300) + 100 : 0;
    const randomSecondEndCount = randomSecondYn ? Math.floor(Math.random() * 10) + 1 : 0;
    const randomThirdYn = Math.floor(Math.random() * 2) === 0;
    const randomThirdPrice = randomThirdYn ? Math.floor(Math.random() * 300) + 100 : 0;
    const randomThirdEndCount = randomThirdYn ? Math.floor(Math.random() * 10) + 1 : 0;
    const randomEtc = `특이사항: ${generateRandomString()}`;
    const randomReturnDate = `2023-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`;
  
    return {
      buyName: randomBuyName,
      buyBirth: randomBuyBirth,
      buyAddress: randomBuyAddress,
      buyPhone: randomBuyPhone,
      buySubPhone: randomBuySubPhone,
      sellerName: randomSellerName,
      sellerBirth: randomSellerBirth,
      sellerAddress: randomSellerAddress,
      sellerPhone: randomSellerPhone,
      sellerSubPhone: randomSellerSubPhone,
      item: randomItemType,
      kind: randomKind,
      areaFlat: randomAreaFlat,
      formalDay: randomFormalDay,
      totalPrice: randomTotalPrice,
      firstYn: randomFirstYn,
      firstPrice: randomFirstPrice,
      firstEndCount: randomFirstEndCount,
      secondYn: randomSecondYn,
      secondPrice: randomSecondPrice,
      secondEndCount: randomSecondEndCount,
      thirdYn: randomThirdYn,
      thirdPrice: randomThirdPrice,
      thirdEndCount: randomThirdEndCount,
      etc: randomEtc,
      returnDate: randomReturnDate,
    };
}

function utf8ByteToUnicodeStr(utf8Bytes){
    var unicodeStr ="";
    for (var pos = 0; pos < utf8Bytes.length;){
        var flag= utf8Bytes[pos];
        var unicode = 0 ;
        if ((flag >>>7) === 0 ) {
            unicodeStr+= String.fromCharCode(utf8Bytes[pos]);
            pos += 1;

        } else if ((flag &0xFC) === 0xFC ){
            unicode = (utf8Bytes[pos] & 0x3) << 30;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 24;
            unicode |= (utf8Bytes[pos+2] & 0x3F) << 18;
            unicode |= (utf8Bytes[pos+3] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos+4] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+5] & 0x3F);
            unicodeStr+= String.fromCharCode(unicode) ;
            pos += 6;

        }else if ((flag &0xF8) === 0xF8 ){
            unicode = (utf8Bytes[pos] & 0x7) << 24;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 18;
            unicode |= (utf8Bytes[pos+2] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos+3] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+4] & 0x3F);
            unicodeStr+= String.fromCharCode(unicode) ;
            pos += 5;

        } else if ((flag &0xF0) === 0xF0 ){
            unicode = (utf8Bytes[pos] & 0xF) << 18;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos+2] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+3] & 0x3F);
            unicodeStr+= String.fromCharCode(unicode) ;
            pos += 4;

        } else if ((flag &0xE0) === 0xE0 ){
            unicode = (utf8Bytes[pos] & 0x1F) << 12;;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+2] & 0x3F);
            unicodeStr+= String.fromCharCode(unicode) ;
            pos += 3;

        } else if ((flag &0xC0) === 0xC0 ){ //110
            unicode = (utf8Bytes[pos] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+1] & 0x3F);
            unicodeStr+= String.fromCharCode(unicode) ;
            pos += 2;

        } else{
            unicodeStr+= String.fromCharCode(utf8Bytes[pos]);
            pos += 1;
        }
    }
    // eslint-disable-next-line
    unicodeStr = unicodeStr.replace(/\x00/g, "");

    // new RegExp('\\x00', 'g')

    return unicodeStr;
}

// convert unit8array to integer
function utf8ByteToUnicodeInt(Uint8Arr) {
    var length = Uint8Arr.length;

    let buffer = Buffer.from(Uint8Arr);
    var result = buffer.readUIntBE(0, length);

    return result;
}

function parseData(data, transform=true) {
    return {
        buyName: utf8ByteToUnicodeStr(data.buyName),
        buyBirth: transform ? convertDate(utf8ByteToUnicodeStr(data.buyBirth)) : utf8ByteToUnicodeStr(data.buyBirth),
        buyAddress: utf8ByteToUnicodeStr(data.buyAddress),
        buyPhone: utf8ByteToUnicodeStr(data.buyPhone),
        buySubPhone: utf8ByteToUnicodeStr(data.buySubPhone),
        sellerName: utf8ByteToUnicodeStr(data.sellerName),
        sellerBirth: transform ? convertDate(utf8ByteToUnicodeStr(data.sellerBirth)) : utf8ByteToUnicodeStr(data.sellerBirth),
        sellerAddress: utf8ByteToUnicodeStr(data.sellerAddress),
        sellerPhone: utf8ByteToUnicodeStr(data.sellerPhone),
        sellerSubPhone: utf8ByteToUnicodeStr(data.sellerSubPhone),
        item: utf8ByteToUnicodeStr(data.item),
        kind: utf8ByteToUnicodeStr(data.kind),
        areaFlat: utf8ByteToUnicodeInt(data.areaFlat),  
        formalDay: transform ? convertDate(utf8ByteToUnicodeStr(data.formalDay)) : utf8ByteToUnicodeStr(data.formalDay),
        totalPrice: utf8ByteToUnicodeInt(data.totalPrice),
        firstYn: Array.from(data.firstYn, x => x !== 0)[0],
        firstPrice: utf8ByteToUnicodeInt(data.firstPrice),
        firstEndCount: utf8ByteToUnicodeInt(data.firstEndCount),
        secondYn: Array.from(data.secondYn, x => x !== 0)[0],
        secondPrice: utf8ByteToUnicodeInt(data.secondPrice),
        secondEndCount: utf8ByteToUnicodeInt(data.secondEndCount),
        thirdYn: Array.from(data.thirdYn, x => x !== 0)[0],
        thirdPrice: utf8ByteToUnicodeInt(data.thirdPrice),
        thirdEndCount: utf8ByteToUnicodeInt(data.thirdEndCount),
        etc: utf8ByteToUnicodeStr(data.etc),
        returnDate: transform ? convertDate(utf8ByteToUnicodeStr(data.returnDate)) : utf8ByteToUnicodeStr(data.returnDate),
    }
}

// create a function, that receive date string like "2020.01.01 or 2020-01-01", and return a date object that can be stored in mysql
function convertDate(dateString) {
    return new Date(dateString);
}

module.exports = {
    parseData,
    generateRandomObject
}


  
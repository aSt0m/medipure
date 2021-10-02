// var tween = KUTE.to('#dollar', { path: '#otro' }).start();

KUTE.fromTo('#icon', { draw: '0% 0%' }, { draw: '0% 100%' }, { duration: 10000 }).start();

KUTE.fromTo('#dollar', { draw: '0% 0%' }, { draw: '0% 100%' }, { duration: 3000 }).start();

KUTE.fromTo('#firma', { draw: '0% 0%' }, { draw: '0% 100%' }, { duration: 3000 }).start();

// draw the stroke from 0-10% to 90-100%
// KUTE.fromTo('#firma',{draw:'0% 10%'}, {draw:'90% 100%'},{duration: 14000}).start();

// draw the stroke from zero to full path length
// KUTE.fromTo('#firma',{draw:'0% 0%'}, {draw:'0% 100%'},{duration: 14000}).start();

// draw the stroke from full length to 50%
// KUTE.fromTo("#firma",{draw:'0% 100%'}, {draw:'50% 50%'},{duration: 14000}).start();
KUTE.to('#imagen-prueba', { borderRadius: '100%' }).start();

/*
//////// IMPORTANT FOR INTERVIEWS ////////////
JS RUNS CODE in 2 phases,and everything is executed in thread.
 ++++++ JAVASCRIPT EXECUTION CONTEXT(ec) +++++
 1: When we write a code firstly GLOBAL EXECUTION CONTEST IS MADE.
     and it saves into THIS keyword.

    {} = gec
 2:  FUNCTION Execution context
 3:  EVAL EC (in mongoose)
 
  phase of executions:::::


 {} -> memory creation phase -> execution phase
  
 memory creation phase:: in this only memory is allocated to the variables.

// we take an eg by snippet of code>
 let a=10
let b=20
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(a,b)
let result2 = addNum(1,2)

firstly, GEC IS allocated  in THIS
 
2== memory creation phase (FIRST CYCLE)
so val1 -> undefined
val2 -> undefined
addNum  -> defination of inner functions
result1 -> undefined
result2 -> undefined

3 == EXECUTION PHASE(SECOND CYCLE)
   VAL1 -> 10
   VAL2 -> 5
   FUNCTION ME ABHI KUCH NAHI HOGA
   NOW ,JAISE HUM RESULT1 PE PAHUCHE

   ADDNUM -> NOW HE CREATES HIS OWN new EXECUTIONal  CONTEXT.
      AND firstly yaha new variable environment + execution thread bamega
       jitni bar function call hogii utni baar yeh new executional context create hogi.
       as here again new sandbox create hogya hain ,
       so abbb dubara first cycle and second cycle chalegi add num ke liye.
       1=> memory phase addNum(a,b)
       a => undefined
       b => undefined
       total => undefined
       2=> execution context (2nd cycle)
       a=10;
       b=20
       total =30
       and jo yeh return hain yeh GEC ME return hoga

       NOTE:: JO RESULT1 ke liye new executaional context create hua tha 
         vo DELETE hojayega

    NOW WE AGAIN COME TO RESULT 2;
    SAME WAHI CHEEZ HOGI JO RESULT1 KE LIE HUA.
  


    //////// CALL STACK ////////////
     1: GLOBAL EXECUTION HOGA
     2: FUNCTION AATEY JAAEGEY YEH EXECUTE HOTA
     JAYEGAA
     3: DELETE HOTA JAYGA
     4: FIFO











*/
import java.util.*;
class Menu {
    public static void main(String[] args) {
        System.out.println("Welcome to my Calculator!/n");
        System.out.println("what operation do you want to perform:\n Addition\n Substraction\n Multiplication\n Division\n");
        Scanner s=new Scanner(System.in);
        String operation=s.nextLine();
        int num1=s.nextInt();
        int num2=s.nextInt();

        switch(operation.toLowerCase()){
            case "addition":System.out.println("Sum of the provided Numbers is: \n"+(num1+num2));
            break;
            case "substraction":System.out.println("Difference of the provided numbers is: \n"+(num1-num2));
            break;
            case "multiplication":System.out.println("Product of the Numbers is: \n"+(num1*num2));
            break;
            case "division":System.out.println("Division of the provided numbers is: \n"+(num1/num2));
            break;

        }
        s.close();


    }
    
}

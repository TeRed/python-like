grammar PythonLike;

file_input
 : ( NEWLINE | stmt )* EOF
 ;

funcdef
 : DEF NAME parameters ':' suite
 ;

parameters
 : '(' argslist? ')'
 ;

argslist
 : NAME ( '=' test )? ( ',' NAME ( '=' test )? )*
 ;

stmt
 : simple_stmt
 | compound_stmt
 ;

simple_stmt
 : small_stmt ( ';' small_stmt )* ';'? NEWLINE
 ;

small_stmt
 : expr_stmt
 | PASS
 | BREAK
 | CONTINUE
 | RETURN test?
 ;

expr_stmt
 : test ( augassign test
          | ( '=' test )*
        )
 ;

augassign
 : '+='
 | '-='
 | '*='
 | '%='
 | '/='
 ;

compound_stmt
 : if_stmt
 | while_stmt
 | funcdef
 ;

if_stmt
 : IF test ':' suite ( ELIF test ':' suite )* ( ELSE ':' suite )?
 ;

while_stmt
 : WHILE test ':' suite
 ;

suite
 : simple_stmt
 | NEWLINE INDENT stmt+ DEDENT
 ;

test
 : or_test
 ;
 
or_test
 : and_test ( OR and_test )*
 ;

and_test
 : not_test ( AND not_test )*
 ;

not_test
 : NOT not_test
 | comparison
 ;

comparison
 : expr ( comp_op expr )*
 ;

comp_op
 : '<'
 | '>'
 | '=='
 | '>='
 | '<='
 | '!='
 ;

expr
 : term ( '+' term
        | '-' term
        )*
 ;

term
 : factor ( '*' factor
          | '/' factor
          | '%' factor
          )*
 ;

factor
 : '+' factor
 | '-' factor
 | power
 ;

power
 : atom trailer*
 ;

atom
 : '(' ( testlist )? ')'
 | NAME
 | number
 | STRING_LITERAL+
 | NONE
 | TRUE
 | FALSE
 ;

testlist
 : test ( ',' test )*
 ;

trailer
 : '(' testlist? ')'
 | '.' NAME
 ;

number
 : DECIMAL_INTEGER
 | FLOAT_NUMBER
 ;
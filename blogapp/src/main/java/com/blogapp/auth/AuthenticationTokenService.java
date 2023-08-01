package com.blogapp.auth;
import com.blogapp.model.Token;
import com.blogapp.model.User;
import com.blogapp.repository.TokenRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Objects;
import java.util.Optional;

@Service
public class AuthenticationTokenService  implements UserDetailsService {

    private final TokenRepository tokenRepository;

    public AuthenticationTokenService(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    public void saveConfirmationToken(Token authenticationToken){
        tokenRepository.save(authenticationToken);
    }
    public Token getToken(User user){
        return   tokenRepository.findByUser(user);
    }

    public User getUser(String token ){
        final Optional<Token> authenticationToken=tokenRepository.findByToken(token);
        if(Objects.isNull(token)){
            return null;
        }
        return authenticationToken.get().getUser();
    }
    public void authentication(String token ) throws Exception {
        if(Objects.isNull(token)){
            throw new Exception("token not present");
        }
        if(Objects.isNull(getUser(token))){
            new Exception("token not present");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
